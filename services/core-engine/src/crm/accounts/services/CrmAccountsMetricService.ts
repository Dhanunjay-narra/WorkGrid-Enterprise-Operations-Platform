import { CrmAccountsMetricModel, CrmAccountsMetricValidator } from "@nexora/types/domains/crm/accounts/CrmAccountsMetric";

export class CrmAccountsMetricService {
  private repository = new Map<string, CrmAccountsMetricModel>();

  public create(data: Omit<CrmAccountsMetricModel, "id" | "version" | "createdAt" | "updatedAt">): CrmAccountsMetricModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmAccountsMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmAccountsMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmAccountsMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmAccountsMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmAccountsMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmAccountsMetricModel>): CrmAccountsMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmAccountsMetricModel = {
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
