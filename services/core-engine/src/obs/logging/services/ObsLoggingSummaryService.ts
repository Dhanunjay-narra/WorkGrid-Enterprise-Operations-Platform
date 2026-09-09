import { ObsLoggingSummaryModel, ObsLoggingSummaryValidator } from "@nexora/types/domains/obs/logging/ObsLoggingSummary";

export class ObsLoggingSummaryService {
  private repository = new Map<string, ObsLoggingSummaryModel>();

  public create(data: Omit<ObsLoggingSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): ObsLoggingSummaryModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsLoggingSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsLoggingSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsLoggingSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsLoggingSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsLoggingSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsLoggingSummaryModel>): ObsLoggingSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsLoggingSummaryModel = {
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
