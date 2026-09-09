import { IotCommandsNodeModel, IotCommandsNodeValidator } from "@nexora/types/domains/iot/commands/IotCommandsNode";

export class IotCommandsNodeService {
  private repository = new Map<string, IotCommandsNodeModel>();

  public create(data: Omit<IotCommandsNodeModel, "id" | "version" | "createdAt" | "updatedAt">): IotCommandsNodeModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotCommandsNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotCommandsNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotCommandsNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotCommandsNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotCommandsNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotCommandsNodeModel>): IotCommandsNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotCommandsNodeModel = {
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
