import { CrmHealthRuleModel, CrmHealthRuleValidator } from "@nexora/types/domains/crm/health/CrmHealthRule";

export class CrmHealthRuleService {
  private repository = new Map<string, CrmHealthRuleModel>();

  public create(data: Omit<CrmHealthRuleModel, "id" | "version" | "createdAt" | "updatedAt">): CrmHealthRuleModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmHealthRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmHealthRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmHealthRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmHealthRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmHealthRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmHealthRuleModel>): CrmHealthRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmHealthRuleModel = {
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
