import { IotCommandsRecordModel, IotCommandsRecordValidator } from "@nexora/types/domains/iot/commands/IotCommandsRecord";

export class IotCommandsRecordService {
  private repository = new Map<string, IotCommandsRecordModel>();

  public create(data: Omit<IotCommandsRecordModel, "id" | "version" | "createdAt" | "updatedAt">): IotCommandsRecordModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotCommandsRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotCommandsRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotCommandsRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotCommandsRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotCommandsRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotCommandsRecordModel>): IotCommandsRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotCommandsRecordModel = {
      ...existing,
      ...updates,
      version: existing.version + 1,
      updatedAt: new Date().toISOString()
    };
    this.repository.set(id, updated);
    return updated;
  }

  public remove(id: string): boolean {
    return this.repository.delete(id);
  }
}
