import { CommMessagesEntryModel, CommMessagesEntryValidator } from "@nexora/types/domains/comm/messages/CommMessagesEntry";

export class CommMessagesEntryService {
  private repository = new Map<string, CommMessagesEntryModel>();

  public create(data: Omit<CommMessagesEntryModel, "id" | "version" | "createdAt" | "updatedAt">): CommMessagesEntryModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommMessagesEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommMessagesEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommMessagesEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommMessagesEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommMessagesEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommMessagesEntryModel>): CommMessagesEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommMessagesEntryModel = {
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
