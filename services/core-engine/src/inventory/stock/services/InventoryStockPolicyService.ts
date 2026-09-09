import { InventoryStockPolicyModel, InventoryStockPolicyValidator } from "@nexora/types/domains/inventory/stock/InventoryStockPolicy";

export class InventoryStockPolicyService {
  private repository = new Map<string, InventoryStockPolicyModel>();

  public create(data: Omit<InventoryStockPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryStockPolicyModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryStockPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryStockPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryStockPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryStockPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryStockPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryStockPolicyModel>): InventoryStockPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryStockPolicyModel = {
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
