import { ObsDashboardsSummaryModel, ObsDashboardsSummaryValidator } from "@nexora/types/domains/obs/dashboards/ObsDashboardsSummary";

export class ObsDashboardsSummaryService {
  private repository = new Map<string, ObsDashboardsSummaryModel>();

  public create(data: Omit<ObsDashboardsSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): ObsDashboardsSummaryModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsDashboardsSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsDashboardsSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsDashboardsSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsDashboardsSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsDashboardsSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsDashboardsSummaryModel>): ObsDashboardsSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsDashboardsSummaryModel = {
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
