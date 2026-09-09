import { CommPresenceSessionModel, CommPresenceSessionValidator } from "@nexora/types/domains/comm/presence/CommPresenceSession";

export class CommPresenceSessionService {
  private repository = new Map<string, CommPresenceSessionModel>();

  public create(data: Omit<CommPresenceSessionModel, "id" | "version" | "createdAt" | "updatedAt">): CommPresenceSessionModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommPresenceSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommPresenceSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommPresenceSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommPresenceSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommPresenceSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommPresenceSessionModel>): CommPresenceSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommPresenceSessionModel = {
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
