import { InvReorderRuleData, InvReorderRuleValidator } from "../../../../packages/types/src/domains/inventory/InvReorderRule";

export class InvReorderRuleService {
  private repository = new Map<string, InvReorderRuleData>();

  public create(data: Omit<InvReorderRuleData, "id" | "createdAt" | "updatedAt">): InvReorderRuleData {
    const id = "inv_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: InvReorderRuleData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = InvReorderRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InvReorderRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InvReorderRuleData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): InvReorderRuleData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<InvReorderRuleData>): InvReorderRuleData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InvReorderRuleData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
