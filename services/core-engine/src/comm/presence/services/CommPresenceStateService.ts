import { CommPresenceStateModel, CommPresenceStateValidator } from "@nexora/types/domains/comm/presence/CommPresenceState";

export class CommPresenceStateService {
  private repository = new Map<string, CommPresenceStateModel>();

  public create(data: Omit<CommPresenceStateModel, "id" | "version" | "createdAt" | "updatedAt">): CommPresenceStateModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommPresenceStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommPresenceStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommPresenceState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommPresenceStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommPresenceStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommPresenceStateModel>): CommPresenceStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommPresenceStateModel = {
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
