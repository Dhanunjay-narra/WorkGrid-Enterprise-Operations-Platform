import { SupRoutingConditionData, SupRoutingConditionValidator } from "../../../../packages/types/src/domains/support/SupRoutingCondition";

export class SupRoutingConditionService {
  private repository = new Map<string, SupRoutingConditionData>();

  public create(data: Omit<SupRoutingConditionData, "id" | "createdAt" | "updatedAt">): SupRoutingConditionData {
    const id = "sup_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: SupRoutingConditionData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupRoutingConditionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupRoutingCondition: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupRoutingConditionData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): SupRoutingConditionData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<SupRoutingConditionData>): SupRoutingConditionData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupRoutingConditionData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
