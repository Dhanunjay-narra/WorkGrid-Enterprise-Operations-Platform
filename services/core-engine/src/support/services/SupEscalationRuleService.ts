import { SupEscalationRuleData, SupEscalationRuleValidator } from "../../../../packages/types/src/domains/support/SupEscalationRule";

export class SupEscalationRuleService {
  private repository = new Map<string, SupEscalationRuleData>();

  public create(data: Omit<SupEscalationRuleData, "id" | "createdAt" | "updatedAt">): SupEscalationRuleData {
    const id = "sup_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: SupEscalationRuleData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupEscalationRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupEscalationRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupEscalationRuleData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): SupEscalationRuleData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<SupEscalationRuleData>): SupEscalationRuleData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupEscalationRuleData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
