import { BiForecastsSummaryModel, BiForecastsSummaryValidator } from "@nexora/types/domains/bi/forecasts/BiForecastsSummary";

export class BiForecastsSummaryService {
  private repository = new Map<string, BiForecastsSummaryModel>();

  public create(data: Omit<BiForecastsSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): BiForecastsSummaryModel {
    const id = "bi_f_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiForecastsSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiForecastsSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiForecastsSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiForecastsSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiForecastsSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiForecastsSummaryModel>): BiForecastsSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiForecastsSummaryModel = {
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
