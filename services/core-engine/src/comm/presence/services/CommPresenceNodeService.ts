import { CommPresenceNodeModel, CommPresenceNodeValidator } from "@nexora/types/domains/comm/presence/CommPresenceNode";

export class CommPresenceNodeService {
  private repository = new Map<string, CommPresenceNodeModel>();

  public create(data: Omit<CommPresenceNodeModel, "id" | "version" | "createdAt" | "updatedAt">): CommPresenceNodeModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommPresenceNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommPresenceNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommPresenceNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommPresenceNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommPresenceNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommPresenceNodeModel>): CommPresenceNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommPresenceNodeModel = {
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
