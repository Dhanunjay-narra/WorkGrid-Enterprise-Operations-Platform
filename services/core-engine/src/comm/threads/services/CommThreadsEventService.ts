import { CommThreadsEventModel, CommThreadsEventValidator } from "@nexora/types/domains/comm/threads/CommThreadsEvent";

export class CommThreadsEventService {
  private repository = new Map<string, CommThreadsEventModel>();

  public create(data: Omit<CommThreadsEventModel, "id" | "version" | "createdAt" | "updatedAt">): CommThreadsEventModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommThreadsEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommThreadsEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommThreadsEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommThreadsEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommThreadsEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommThreadsEventModel>): CommThreadsEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommThreadsEventModel = {
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
