import { FinCashFlowItemData, FinCashFlowItemValidator } from "../../../../packages/types/src/domains/finance/FinCashFlowItem";

export class FinCashFlowItemService {
  private repository = new Map<string, FinCashFlowItemData>();

  public create(data: Omit<FinCashFlowItemData, "id" | "createdAt" | "updatedAt">): FinCashFlowItemData {
    const id = "fin_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: FinCashFlowItemData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinCashFlowItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinCashFlowItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinCashFlowItemData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): FinCashFlowItemData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<FinCashFlowItemData>): FinCashFlowItemData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinCashFlowItemData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
