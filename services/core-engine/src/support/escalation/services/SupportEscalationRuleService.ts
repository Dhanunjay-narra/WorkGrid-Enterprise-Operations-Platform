import { SupportEscalationRuleModel, SupportEscalationRuleValidator } from "@nexora/types/domains/support/escalation/SupportEscalationRule";

export class SupportEscalationRuleService {
  private repository = new Map<string, SupportEscalationRuleModel>();

  public create(data: Omit<SupportEscalationRuleModel, "id" | "version" | "createdAt" | "updatedAt">): SupportEscalationRuleModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportEscalationRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportEscalationRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportEscalationRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportEscalationRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportEscalationRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportEscalationRuleModel>): SupportEscalationRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportEscalationRuleModel = {
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
