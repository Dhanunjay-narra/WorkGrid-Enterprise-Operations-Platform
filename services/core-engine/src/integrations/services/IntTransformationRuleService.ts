import { IntTransformationRuleData, IntTransformationRuleValidator } from "../../../../packages/types/src/domains/integrations/IntTransformationRule";

export class IntTransformationRuleService {
  private repository = new Map<string, IntTransformationRuleData>();

  public create(data: Omit<IntTransformationRuleData, "id" | "createdAt" | "updatedAt">): IntTransformationRuleData {
    const id = "int_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: IntTransformationRuleData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntTransformationRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntTransformationRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntTransformationRuleData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): IntTransformationRuleData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<IntTransformationRuleData>): IntTransformationRuleData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntTransformationRuleData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
