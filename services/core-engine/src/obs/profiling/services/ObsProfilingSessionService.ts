import { ObsProfilingSessionModel, ObsProfilingSessionValidator } from "@nexora/types/domains/obs/profiling/ObsProfilingSession";

export class ObsProfilingSessionService {
  private repository = new Map<string, ObsProfilingSessionModel>();

  public create(data: Omit<ObsProfilingSessionModel, "id" | "version" | "createdAt" | "updatedAt">): ObsProfilingSessionModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsProfilingSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsProfilingSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsProfilingSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsProfilingSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsProfilingSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsProfilingSessionModel>): ObsProfilingSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsProfilingSessionModel = {
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
