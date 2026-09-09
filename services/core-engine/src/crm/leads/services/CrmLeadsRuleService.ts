import { CrmLeadsRuleModel, CrmLeadsRuleValidator } from "@nexora/types/domains/crm/leads/CrmLeadsRule";

export class CrmLeadsRuleService {
  private repository = new Map<string, CrmLeadsRuleModel>();

  public create(data: Omit<CrmLeadsRuleModel, "id" | "version" | "createdAt" | "updatedAt">): CrmLeadsRuleModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmLeadsRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmLeadsRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmLeadsRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmLeadsRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmLeadsRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmLeadsRuleModel>): CrmLeadsRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmLeadsRuleModel = {
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
