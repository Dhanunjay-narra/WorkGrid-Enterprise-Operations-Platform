import { InventoryTransfersSummaryModel, InventoryTransfersSummaryValidator } from "@nexora/types/domains/inventory/transfers/InventoryTransfersSummary";

export class InventoryTransfersSummaryService {
  private repository = new Map<string, InventoryTransfersSummaryModel>();

  public create(data: Omit<InventoryTransfersSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryTransfersSummaryModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryTransfersSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryTransfersSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryTransfersSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryTransfersSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryTransfersSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryTransfersSummaryModel>): InventoryTransfersSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryTransfersSummaryModel = {
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
