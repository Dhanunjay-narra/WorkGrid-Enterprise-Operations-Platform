import { CommMessagesProfileModel, CommMessagesProfileValidator } from "@nexora/types/domains/comm/messages/CommMessagesProfile";

export class CommMessagesProfileService {
  private repository = new Map<string, CommMessagesProfileModel>();

  public create(data: Omit<CommMessagesProfileModel, "id" | "version" | "createdAt" | "updatedAt">): CommMessagesProfileModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommMessagesProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommMessagesProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommMessagesProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommMessagesProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommMessagesProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommMessagesProfileModel>): CommMessagesProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommMessagesProfileModel = {
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
