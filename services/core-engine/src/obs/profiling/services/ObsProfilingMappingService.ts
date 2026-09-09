import { ObsProfilingMappingModel, ObsProfilingMappingValidator } from "@nexora/types/domains/obs/profiling/ObsProfilingMapping";

export class ObsProfilingMappingService {
  private repository = new Map<string, ObsProfilingMappingModel>();

  public create(data: Omit<ObsProfilingMappingModel, "id" | "version" | "createdAt" | "updatedAt">): ObsProfilingMappingModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsProfilingMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsProfilingMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsProfilingMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsProfilingMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsProfilingMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsProfilingMappingModel>): ObsProfilingMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsProfilingMappingModel = {
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
