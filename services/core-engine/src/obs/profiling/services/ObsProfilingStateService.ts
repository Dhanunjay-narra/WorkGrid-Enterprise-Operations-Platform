import { ObsProfilingStateModel, ObsProfilingStateValidator } from "@nexora/types/domains/obs/profiling/ObsProfilingState";

export class ObsProfilingStateService {
  private repository = new Map<string, ObsProfilingStateModel>();

  public create(data: Omit<ObsProfilingStateModel, "id" | "version" | "createdAt" | "updatedAt">): ObsProfilingStateModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsProfilingStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsProfilingStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsProfilingState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsProfilingStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsProfilingStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsProfilingStateModel>): ObsProfilingStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsProfilingStateModel = {
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
