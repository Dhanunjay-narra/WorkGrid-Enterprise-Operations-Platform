import { IotCommandsPayloadModel, IotCommandsPayloadValidator } from "@nexora/types/domains/iot/commands/IotCommandsPayload";

export class IotCommandsPayloadService {
  private repository = new Map<string, IotCommandsPayloadModel>();

  public create(data: Omit<IotCommandsPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): IotCommandsPayloadModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotCommandsPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotCommandsPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotCommandsPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotCommandsPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotCommandsPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotCommandsPayloadModel>): IotCommandsPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotCommandsPayloadModel = {
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
