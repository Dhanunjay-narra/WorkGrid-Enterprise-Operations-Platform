import { InventoryTransfersTransactionModel, InventoryTransfersTransactionValidator } from "@nexora/types/domains/inventory/transfers/InventoryTransfersTransaction";

export class InventoryTransfersTransactionService {
  private repository = new Map<string, InventoryTransfersTransactionModel>();

  public create(data: Omit<InventoryTransfersTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryTransfersTransactionModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryTransfersTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryTransfersTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryTransfersTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryTransfersTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryTransfersTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryTransfersTransactionModel>): InventoryTransfersTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryTransfersTransactionModel = {
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
