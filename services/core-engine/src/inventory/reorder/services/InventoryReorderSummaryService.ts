import { InventoryReorderSummaryModel, InventoryReorderSummaryValidator } from "@nexora/types/domains/inventory/reorder/InventoryReorderSummary";

export class InventoryReorderSummaryService {
  private repository = new Map<string, InventoryReorderSummaryModel>();

  public create(data: Omit<InventoryReorderSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryReorderSummaryModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryReorderSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryReorderSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryReorderSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryReorderSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryReorderSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryReorderSummaryModel>): InventoryReorderSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryReorderSummaryModel = {
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
