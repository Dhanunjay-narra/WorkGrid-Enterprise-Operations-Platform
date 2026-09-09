import { InventoryTransfersRuleModel, InventoryTransfersRuleValidator } from "@nexora/types/domains/inventory/transfers/InventoryTransfersRule";

export class InventoryTransfersRuleService {
  private repository = new Map<string, InventoryTransfersRuleModel>();

  public create(data: Omit<InventoryTransfersRuleModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryTransfersRuleModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryTransfersRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryTransfersRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryTransfersRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryTransfersRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryTransfersRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryTransfersRuleModel>): InventoryTransfersRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryTransfersRuleModel = {
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
