import { ObsDashboardsPolicyModel, ObsDashboardsPolicyValidator } from "@nexora/types/domains/obs/dashboards/ObsDashboardsPolicy";

export class ObsDashboardsPolicyService {
  private repository = new Map<string, ObsDashboardsPolicyModel>();

  public create(data: Omit<ObsDashboardsPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): ObsDashboardsPolicyModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsDashboardsPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsDashboardsPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsDashboardsPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsDashboardsPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsDashboardsPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsDashboardsPolicyModel>): ObsDashboardsPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsDashboardsPolicyModel = {
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
