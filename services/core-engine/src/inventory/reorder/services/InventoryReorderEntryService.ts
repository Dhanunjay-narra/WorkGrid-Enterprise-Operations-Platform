import { InventoryReorderEntryModel, InventoryReorderEntryValidator } from "@nexora/types/domains/inventory/reorder/InventoryReorderEntry";

export class InventoryReorderEntryService {
  private repository = new Map<string, InventoryReorderEntryModel>();

  public create(data: Omit<InventoryReorderEntryModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryReorderEntryModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryReorderEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryReorderEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryReorderEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryReorderEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryReorderEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryReorderEntryModel>): InventoryReorderEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryReorderEntryModel = {
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
