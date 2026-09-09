import { InventoryStockRuleModel, InventoryStockRuleValidator } from "@nexora/types/domains/inventory/stock/InventoryStockRule";

export class InventoryStockRuleService {
  private repository = new Map<string, InventoryStockRuleModel>();

  public create(data: Omit<InventoryStockRuleModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryStockRuleModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryStockRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryStockRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryStockRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryStockRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryStockRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryStockRuleModel>): InventoryStockRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryStockRuleModel = {
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
