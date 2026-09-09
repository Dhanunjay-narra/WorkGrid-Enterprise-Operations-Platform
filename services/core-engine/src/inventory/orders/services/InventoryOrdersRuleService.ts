import { InventoryOrdersRuleModel, InventoryOrdersRuleValidator } from "@nexora/types/domains/inventory/orders/InventoryOrdersRule";

export class InventoryOrdersRuleService {
  private repository = new Map<string, InventoryOrdersRuleModel>();

  public create(data: Omit<InventoryOrdersRuleModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryOrdersRuleModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryOrdersRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryOrdersRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryOrdersRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryOrdersRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryOrdersRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryOrdersRuleModel>): InventoryOrdersRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryOrdersRuleModel = {
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
