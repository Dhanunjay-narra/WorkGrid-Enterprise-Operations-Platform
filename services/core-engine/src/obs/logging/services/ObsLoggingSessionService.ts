import { ObsLoggingSessionModel, ObsLoggingSessionValidator } from "@nexora/types/domains/obs/logging/ObsLoggingSession";

export class ObsLoggingSessionService {
  private repository = new Map<string, ObsLoggingSessionModel>();

  public create(data: Omit<ObsLoggingSessionModel, "id" | "version" | "createdAt" | "updatedAt">): ObsLoggingSessionModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsLoggingSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsLoggingSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsLoggingSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsLoggingSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsLoggingSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsLoggingSessionModel>): ObsLoggingSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsLoggingSessionModel = {
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
