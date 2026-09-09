import { IotFleetItemModel, IotFleetItemValidator } from "@nexora/types/domains/iot/fleet/IotFleetItem";

export class IotFleetItemService {
  private repository = new Map<string, IotFleetItemModel>();

  public create(data: Omit<IotFleetItemModel, "id" | "version" | "createdAt" | "updatedAt">): IotFleetItemModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotFleetItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotFleetItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotFleetItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotFleetItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotFleetItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotFleetItemModel>): IotFleetItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotFleetItemModel = {
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
