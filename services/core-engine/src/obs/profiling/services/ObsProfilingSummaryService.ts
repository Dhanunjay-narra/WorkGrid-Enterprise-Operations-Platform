import { ObsProfilingSummaryModel, ObsProfilingSummaryValidator } from "@nexora/types/domains/obs/profiling/ObsProfilingSummary";

export class ObsProfilingSummaryService {
  private repository = new Map<string, ObsProfilingSummaryModel>();

  public create(data: Omit<ObsProfilingSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): ObsProfilingSummaryModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsProfilingSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsProfilingSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsProfilingSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsProfilingSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsProfilingSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsProfilingSummaryModel>): ObsProfilingSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsProfilingSummaryModel = {
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
