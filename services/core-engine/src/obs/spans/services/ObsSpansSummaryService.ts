import { ObsSpansSummaryModel, ObsSpansSummaryValidator } from "@nexora/types/domains/obs/spans/ObsSpansSummary";

export class ObsSpansSummaryService {
  private repository = new Map<string, ObsSpansSummaryModel>();

  public create(data: Omit<ObsSpansSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): ObsSpansSummaryModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsSpansSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsSpansSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsSpansSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsSpansSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsSpansSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsSpansSummaryModel>): ObsSpansSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsSpansSummaryModel = {
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
