import { IotCommandsItemModel, IotCommandsItemValidator } from "@nexora/types/domains/iot/commands/IotCommandsItem";

export class IotCommandsItemService {
  private repository = new Map<string, IotCommandsItemModel>();

  public create(data: Omit<IotCommandsItemModel, "id" | "version" | "createdAt" | "updatedAt">): IotCommandsItemModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotCommandsItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotCommandsItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotCommandsItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotCommandsItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotCommandsItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotCommandsItemModel>): IotCommandsItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotCommandsItemModel = {
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
