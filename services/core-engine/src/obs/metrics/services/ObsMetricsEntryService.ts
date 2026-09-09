import { ObsMetricsEntryModel, ObsMetricsEntryValidator } from "@nexora/types/domains/obs/metrics/ObsMetricsEntry";

export class ObsMetricsEntryService {
  private repository = new Map<string, ObsMetricsEntryModel>();

  public create(data: Omit<ObsMetricsEntryModel, "id" | "version" | "createdAt" | "updatedAt">): ObsMetricsEntryModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsMetricsEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsMetricsEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsMetricsEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsMetricsEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsMetricsEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsMetricsEntryModel>): ObsMetricsEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsMetricsEntryModel = {
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
