import { ObsTracingEventModel, ObsTracingEventValidator } from "@nexora/types/domains/obs/tracing/ObsTracingEvent";

export class ObsTracingEventService {
  private repository = new Map<string, ObsTracingEventModel>();

  public create(data: Omit<ObsTracingEventModel, "id" | "version" | "createdAt" | "updatedAt">): ObsTracingEventModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsTracingEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsTracingEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsTracingEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsTracingEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsTracingEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsTracingEventModel>): ObsTracingEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsTracingEventModel = {
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
