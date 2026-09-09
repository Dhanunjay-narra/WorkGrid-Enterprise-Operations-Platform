import { CrmContactsRuleModel, CrmContactsRuleValidator } from "@nexora/types/domains/crm/contacts/CrmContactsRule";

export class CrmContactsRuleService {
  private repository = new Map<string, CrmContactsRuleModel>();

  public create(data: Omit<CrmContactsRuleModel, "id" | "version" | "createdAt" | "updatedAt">): CrmContactsRuleModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmContactsRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmContactsRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmContactsRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmContactsRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmContactsRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmContactsRuleModel>): CrmContactsRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmContactsRuleModel = {
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
