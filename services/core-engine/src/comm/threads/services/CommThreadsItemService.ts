import { CommThreadsItemModel, CommThreadsItemValidator } from "@nexora/types/domains/comm/threads/CommThreadsItem";

export class CommThreadsItemService {
  private repository = new Map<string, CommThreadsItemModel>();

  public create(data: Omit<CommThreadsItemModel, "id" | "version" | "createdAt" | "updatedAt">): CommThreadsItemModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommThreadsItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommThreadsItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommThreadsItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommThreadsItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommThreadsItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommThreadsItemModel>): CommThreadsItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommThreadsItemModel = {
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
