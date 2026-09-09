import { IotCommandsTaskModel, IotCommandsTaskValidator } from "@nexora/types/domains/iot/commands/IotCommandsTask";

export class IotCommandsTaskService {
  private repository = new Map<string, IotCommandsTaskModel>();

  public create(data: Omit<IotCommandsTaskModel, "id" | "version" | "createdAt" | "updatedAt">): IotCommandsTaskModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotCommandsTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotCommandsTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotCommandsTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotCommandsTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotCommandsTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotCommandsTaskModel>): IotCommandsTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotCommandsTaskModel = {
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
