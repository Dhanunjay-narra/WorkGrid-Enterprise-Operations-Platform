import { CommPresenceEventModel, CommPresenceEventValidator } from "@nexora/types/domains/comm/presence/CommPresenceEvent";

export class CommPresenceEventService {
  private repository = new Map<string, CommPresenceEventModel>();

  public create(data: Omit<CommPresenceEventModel, "id" | "version" | "createdAt" | "updatedAt">): CommPresenceEventModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommPresenceEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommPresenceEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommPresenceEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommPresenceEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommPresenceEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommPresenceEventModel>): CommPresenceEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommPresenceEventModel = {
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
