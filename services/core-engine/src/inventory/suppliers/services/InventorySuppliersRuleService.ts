import { InventorySuppliersRuleModel, InventorySuppliersRuleValidator } from "@nexora/types/domains/inventory/suppliers/InventorySuppliersRule";

export class InventorySuppliersRuleService {
  private repository = new Map<string, InventorySuppliersRuleModel>();

  public create(data: Omit<InventorySuppliersRuleModel, "id" | "version" | "createdAt" | "updatedAt">): InventorySuppliersRuleModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventorySuppliersRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventorySuppliersRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventorySuppliersRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventorySuppliersRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventorySuppliersRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventorySuppliersRuleModel>): InventorySuppliersRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventorySuppliersRuleModel = {
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
