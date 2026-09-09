import { CrmForecastingPolicyModel, CrmForecastingPolicyValidator } from "@nexora/types/domains/crm/forecasting/CrmForecastingPolicy";

export class CrmForecastingPolicyService {
  private repository = new Map<string, CrmForecastingPolicyModel>();

  public create(data: Omit<CrmForecastingPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): CrmForecastingPolicyModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmForecastingPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmForecastingPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmForecastingPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmForecastingPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmForecastingPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmForecastingPolicyModel>): CrmForecastingPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmForecastingPolicyModel = {
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
