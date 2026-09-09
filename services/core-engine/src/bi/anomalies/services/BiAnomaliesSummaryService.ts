import { BiAnomaliesSummaryModel, BiAnomaliesSummaryValidator } from "@nexora/types/domains/bi/anomalies/BiAnomaliesSummary";

export class BiAnomaliesSummaryService {
  private repository = new Map<string, BiAnomaliesSummaryModel>();

  public create(data: Omit<BiAnomaliesSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): BiAnomaliesSummaryModel {
    const id = "bi_a_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiAnomaliesSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiAnomaliesSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiAnomaliesSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiAnomaliesSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiAnomaliesSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiAnomaliesSummaryModel>): BiAnomaliesSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiAnomaliesSummaryModel = {
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
