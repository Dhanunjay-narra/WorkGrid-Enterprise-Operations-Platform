import { ObsLoggingStateModel, ObsLoggingStateValidator } from "@nexora/types/domains/obs/logging/ObsLoggingState";

export class ObsLoggingStateService {
  private repository = new Map<string, ObsLoggingStateModel>();

  public create(data: Omit<ObsLoggingStateModel, "id" | "version" | "createdAt" | "updatedAt">): ObsLoggingStateModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsLoggingStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsLoggingStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsLoggingState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsLoggingStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsLoggingStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsLoggingStateModel>): ObsLoggingStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsLoggingStateModel = {
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
