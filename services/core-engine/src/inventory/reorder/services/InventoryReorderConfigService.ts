import { InventoryReorderConfigModel, InventoryReorderConfigValidator } from "@nexora/types/domains/inventory/reorder/InventoryReorderConfig";

export class InventoryReorderConfigService {
  private repository = new Map<string, InventoryReorderConfigModel>();

  public create(data: Omit<InventoryReorderConfigModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryReorderConfigModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryReorderConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryReorderConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryReorderConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryReorderConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryReorderConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryReorderConfigModel>): InventoryReorderConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryReorderConfigModel = {
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
