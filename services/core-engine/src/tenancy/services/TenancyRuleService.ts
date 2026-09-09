import { TenancyRuleModel, TenancyRuleValidator } from "@nexora/types/domains/tenancy/TenancyRule";

export class TenancyRuleService {
  private repository = new Map<string, TenancyRuleModel>();

  public create(data: Omit<TenancyRuleModel, "id" | "version" | "createdAt" | "updatedAt">): TenancyRuleModel {
    const id = "tena_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: TenancyRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = TenancyRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for TenancyRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): TenancyRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: TenancyRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<TenancyRuleModel>): TenancyRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: TenancyRuleModel = {
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
