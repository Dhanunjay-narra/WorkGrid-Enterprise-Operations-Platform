import { InventorySkuRuleModel, InventorySkuRuleValidator } from "@nexora/types/domains/inventory/sku/InventorySkuRule";

export class InventorySkuRuleService {
  private repository = new Map<string, InventorySkuRuleModel>();

  public create(data: Omit<InventorySkuRuleModel, "id" | "version" | "createdAt" | "updatedAt">): InventorySkuRuleModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventorySkuRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventorySkuRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventorySkuRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventorySkuRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventorySkuRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventorySkuRuleModel>): InventorySkuRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventorySkuRuleModel = {
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
