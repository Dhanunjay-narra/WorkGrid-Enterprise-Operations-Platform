import { ObsTracingStateModel, ObsTracingStateValidator } from "@nexora/types/domains/obs/tracing/ObsTracingState";

export class ObsTracingStateService {
  private repository = new Map<string, ObsTracingStateModel>();

  public create(data: Omit<ObsTracingStateModel, "id" | "version" | "createdAt" | "updatedAt">): ObsTracingStateModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsTracingStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsTracingStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsTracingState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsTracingStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsTracingStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsTracingStateModel>): ObsTracingStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsTracingStateModel = {
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
