import { BiDashboardsSummaryModel, BiDashboardsSummaryValidator } from "@nexora/types/domains/bi/dashboards/BiDashboardsSummary";

export class BiDashboardsSummaryService {
  private repository = new Map<string, BiDashboardsSummaryModel>();

  public create(data: Omit<BiDashboardsSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): BiDashboardsSummaryModel {
    const id = "bi_d_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiDashboardsSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiDashboardsSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiDashboardsSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiDashboardsSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiDashboardsSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiDashboardsSummaryModel>): BiDashboardsSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiDashboardsSummaryModel = {
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
