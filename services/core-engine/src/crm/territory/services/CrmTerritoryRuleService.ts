import { CrmTerritoryRuleModel, CrmTerritoryRuleValidator } from "@nexora/types/domains/crm/territory/CrmTerritoryRule";

export class CrmTerritoryRuleService {
  private repository = new Map<string, CrmTerritoryRuleModel>();

  public create(data: Omit<CrmTerritoryRuleModel, "id" | "version" | "createdAt" | "updatedAt">): CrmTerritoryRuleModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmTerritoryRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmTerritoryRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmTerritoryRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmTerritoryRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmTerritoryRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmTerritoryRuleModel>): CrmTerritoryRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmTerritoryRuleModel = {
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
