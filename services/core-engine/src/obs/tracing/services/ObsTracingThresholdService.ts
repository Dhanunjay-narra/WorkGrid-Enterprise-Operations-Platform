import { ObsTracingThresholdModel, ObsTracingThresholdValidator } from "@nexora/types/domains/obs/tracing/ObsTracingThreshold";

export class ObsTracingThresholdService {
  private repository = new Map<string, ObsTracingThresholdModel>();

  public create(data: Omit<ObsTracingThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): ObsTracingThresholdModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsTracingThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsTracingThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsTracingThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsTracingThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsTracingThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsTracingThresholdModel>): ObsTracingThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsTracingThresholdModel = {
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
