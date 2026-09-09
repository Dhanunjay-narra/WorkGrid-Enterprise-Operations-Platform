import { CommThreadsSessionModel, CommThreadsSessionValidator } from "@nexora/types/domains/comm/threads/CommThreadsSession";

export class CommThreadsSessionService {
  private repository = new Map<string, CommThreadsSessionModel>();

  public create(data: Omit<CommThreadsSessionModel, "id" | "version" | "createdAt" | "updatedAt">): CommThreadsSessionModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommThreadsSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommThreadsSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommThreadsSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommThreadsSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommThreadsSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommThreadsSessionModel>): CommThreadsSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommThreadsSessionModel = {
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
