import { CommThreadsEntryModel, CommThreadsEntryValidator } from "@nexora/types/domains/comm/threads/CommThreadsEntry";

export class CommThreadsEntryService {
  private repository = new Map<string, CommThreadsEntryModel>();

  public create(data: Omit<CommThreadsEntryModel, "id" | "version" | "createdAt" | "updatedAt">): CommThreadsEntryModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommThreadsEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommThreadsEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommThreadsEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommThreadsEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommThreadsEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommThreadsEntryModel>): CommThreadsEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommThreadsEntryModel = {
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
