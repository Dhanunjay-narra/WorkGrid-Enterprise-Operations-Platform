import { SupportSlaRuleModel, SupportSlaRuleValidator } from "@nexora/types/domains/support/sla/SupportSlaRule";

export class SupportSlaRuleService {
  private repository = new Map<string, SupportSlaRuleModel>();

  public create(data: Omit<SupportSlaRuleModel, "id" | "version" | "createdAt" | "updatedAt">): SupportSlaRuleModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportSlaRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportSlaRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportSlaRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportSlaRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportSlaRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportSlaRuleModel>): SupportSlaRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportSlaRuleModel = {
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
