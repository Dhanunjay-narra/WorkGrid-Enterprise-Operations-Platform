import { ObsTracingSessionModel, ObsTracingSessionValidator } from "@nexora/types/domains/obs/tracing/ObsTracingSession";

export class ObsTracingSessionService {
  private repository = new Map<string, ObsTracingSessionModel>();

  public create(data: Omit<ObsTracingSessionModel, "id" | "version" | "createdAt" | "updatedAt">): ObsTracingSessionModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsTracingSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsTracingSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsTracingSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsTracingSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsTracingSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsTracingSessionModel>): ObsTracingSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsTracingSessionModel = {
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
