import { ObsMetricsSessionModel, ObsMetricsSessionValidator } from "@nexora/types/domains/obs/metrics/ObsMetricsSession";

export class ObsMetricsSessionService {
  private repository = new Map<string, ObsMetricsSessionModel>();

  public create(data: Omit<ObsMetricsSessionModel, "id" | "version" | "createdAt" | "updatedAt">): ObsMetricsSessionModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsMetricsSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsMetricsSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsMetricsSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsMetricsSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsMetricsSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsMetricsSessionModel>): ObsMetricsSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsMetricsSessionModel = {
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
