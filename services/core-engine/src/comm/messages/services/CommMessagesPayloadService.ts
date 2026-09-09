import { CommMessagesPayloadModel, CommMessagesPayloadValidator } from "@nexora/types/domains/comm/messages/CommMessagesPayload";

export class CommMessagesPayloadService {
  private repository = new Map<string, CommMessagesPayloadModel>();

  public create(data: Omit<CommMessagesPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): CommMessagesPayloadModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommMessagesPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommMessagesPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommMessagesPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommMessagesPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommMessagesPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommMessagesPayloadModel>): CommMessagesPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommMessagesPayloadModel = {
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
