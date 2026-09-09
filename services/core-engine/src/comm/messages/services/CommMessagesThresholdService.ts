import { CommMessagesThresholdModel, CommMessagesThresholdValidator } from "@nexora/types/domains/comm/messages/CommMessagesThreshold";

export class CommMessagesThresholdService {
  private repository = new Map<string, CommMessagesThresholdModel>();

  public create(data: Omit<CommMessagesThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): CommMessagesThresholdModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommMessagesThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommMessagesThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommMessagesThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommMessagesThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommMessagesThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommMessagesThresholdModel>): CommMessagesThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommMessagesThresholdModel = {
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
