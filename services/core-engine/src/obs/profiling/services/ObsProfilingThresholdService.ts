import { ObsProfilingThresholdModel, ObsProfilingThresholdValidator } from "@nexora/types/domains/obs/profiling/ObsProfilingThreshold";

export class ObsProfilingThresholdService {
  private repository = new Map<string, ObsProfilingThresholdModel>();

  public create(data: Omit<ObsProfilingThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): ObsProfilingThresholdModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsProfilingThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsProfilingThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsProfilingThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsProfilingThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsProfilingThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsProfilingThresholdModel>): ObsProfilingThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsProfilingThresholdModel = {
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
