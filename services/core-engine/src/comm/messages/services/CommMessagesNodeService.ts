import { CommMessagesNodeModel, CommMessagesNodeValidator } from "@nexora/types/domains/comm/messages/CommMessagesNode";

export class CommMessagesNodeService {
  private repository = new Map<string, CommMessagesNodeModel>();

  public create(data: Omit<CommMessagesNodeModel, "id" | "version" | "createdAt" | "updatedAt">): CommMessagesNodeModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommMessagesNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommMessagesNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommMessagesNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommMessagesNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommMessagesNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommMessagesNodeModel>): CommMessagesNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommMessagesNodeModel = {
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
