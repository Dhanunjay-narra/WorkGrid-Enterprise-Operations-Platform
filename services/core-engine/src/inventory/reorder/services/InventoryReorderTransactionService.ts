import { InventoryReorderTransactionModel, InventoryReorderTransactionValidator } from "@nexora/types/domains/inventory/reorder/InventoryReorderTransaction";

export class InventoryReorderTransactionService {
  private repository = new Map<string, InventoryReorderTransactionModel>();

  public create(data: Omit<InventoryReorderTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryReorderTransactionModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryReorderTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryReorderTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryReorderTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryReorderTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryReorderTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryReorderTransactionModel>): InventoryReorderTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryReorderTransactionModel = {
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
