import { InventorySuppliersTransactionModel, InventorySuppliersTransactionValidator } from "@nexora/types/domains/inventory/suppliers/InventorySuppliersTransaction";

export class InventorySuppliersTransactionService {
  private repository = new Map<string, InventorySuppliersTransactionModel>();

  public create(data: Omit<InventorySuppliersTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): InventorySuppliersTransactionModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventorySuppliersTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventorySuppliersTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventorySuppliersTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventorySuppliersTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventorySuppliersTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventorySuppliersTransactionModel>): InventorySuppliersTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventorySuppliersTransactionModel = {
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
