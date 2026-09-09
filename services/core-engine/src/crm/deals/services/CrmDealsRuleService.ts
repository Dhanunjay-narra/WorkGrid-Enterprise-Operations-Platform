import { CrmDealsRuleModel, CrmDealsRuleValidator } from "@nexora/types/domains/crm/deals/CrmDealsRule";

export class CrmDealsRuleService {
  private repository = new Map<string, CrmDealsRuleModel>();

  public create(data: Omit<CrmDealsRuleModel, "id" | "version" | "createdAt" | "updatedAt">): CrmDealsRuleModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmDealsRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmDealsRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmDealsRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmDealsRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmDealsRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmDealsRuleModel>): CrmDealsRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmDealsRuleModel = {
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
