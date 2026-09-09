import { CommPresenceTaskModel, CommPresenceTaskValidator } from "@nexora/types/domains/comm/presence/CommPresenceTask";

export class CommPresenceTaskService {
  private repository = new Map<string, CommPresenceTaskModel>();

  public create(data: Omit<CommPresenceTaskModel, "id" | "version" | "createdAt" | "updatedAt">): CommPresenceTaskModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommPresenceTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommPresenceTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommPresenceTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommPresenceTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommPresenceTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommPresenceTaskModel>): CommPresenceTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommPresenceTaskModel = {
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
