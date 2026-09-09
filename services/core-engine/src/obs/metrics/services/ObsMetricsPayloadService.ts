import { ObsMetricsPayloadModel, ObsMetricsPayloadValidator } from "@nexora/types/domains/obs/metrics/ObsMetricsPayload";

export class ObsMetricsPayloadService {
  private repository = new Map<string, ObsMetricsPayloadModel>();

  public create(data: Omit<ObsMetricsPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): ObsMetricsPayloadModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsMetricsPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsMetricsPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsMetricsPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsMetricsPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsMetricsPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsMetricsPayloadModel>): ObsMetricsPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsMetricsPayloadModel = {
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
