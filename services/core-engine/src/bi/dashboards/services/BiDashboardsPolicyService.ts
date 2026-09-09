import { BiDashboardsPolicyModel, BiDashboardsPolicyValidator } from "@nexora/types/domains/bi/dashboards/BiDashboardsPolicy";

export class BiDashboardsPolicyService {
  private repository = new Map<string, BiDashboardsPolicyModel>();

  public create(data: Omit<BiDashboardsPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): BiDashboardsPolicyModel {
    const id = "bi_d_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiDashboardsPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiDashboardsPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiDashboardsPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiDashboardsPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiDashboardsPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiDashboardsPolicyModel>): BiDashboardsPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiDashboardsPolicyModel = {
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
