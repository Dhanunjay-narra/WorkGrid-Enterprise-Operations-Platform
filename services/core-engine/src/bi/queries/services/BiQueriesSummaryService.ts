import { BiQueriesSummaryModel, BiQueriesSummaryValidator } from "@nexora/types/domains/bi/queries/BiQueriesSummary";

export class BiQueriesSummaryService {
  private repository = new Map<string, BiQueriesSummaryModel>();

  public create(data: Omit<BiQueriesSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): BiQueriesSummaryModel {
    const id = "bi_q_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiQueriesSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiQueriesSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiQueriesSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiQueriesSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiQueriesSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiQueriesSummaryModel>): BiQueriesSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiQueriesSummaryModel = {
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
