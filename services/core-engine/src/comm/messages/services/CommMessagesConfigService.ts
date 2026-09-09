import { CommMessagesConfigModel, CommMessagesConfigValidator } from "@nexora/types/domains/comm/messages/CommMessagesConfig";

export class CommMessagesConfigService {
  private repository = new Map<string, CommMessagesConfigModel>();

  public create(data: Omit<CommMessagesConfigModel, "id" | "version" | "createdAt" | "updatedAt">): CommMessagesConfigModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommMessagesConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommMessagesConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommMessagesConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommMessagesConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommMessagesConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommMessagesConfigModel>): CommMessagesConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommMessagesConfigModel = {
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
