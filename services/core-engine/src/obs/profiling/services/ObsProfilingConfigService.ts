import { ObsProfilingConfigModel, ObsProfilingConfigValidator } from "@nexora/types/domains/obs/profiling/ObsProfilingConfig";

export class ObsProfilingConfigService {
  private repository = new Map<string, ObsProfilingConfigModel>();

  public create(data: Omit<ObsProfilingConfigModel, "id" | "version" | "createdAt" | "updatedAt">): ObsProfilingConfigModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsProfilingConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsProfilingConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsProfilingConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsProfilingConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsProfilingConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsProfilingConfigModel>): ObsProfilingConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsProfilingConfigModel = {
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
