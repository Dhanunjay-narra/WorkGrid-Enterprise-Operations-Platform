import { CommChatMessageData, CommChatMessageValidator } from "../../../../packages/types/src/domains/communication/CommChatMessage";

export class CommChatMessageService {
  private repository = new Map<string, CommChatMessageData>();

  public create(data: Omit<CommChatMessageData, "id" | "createdAt" | "updatedAt">): CommChatMessageData {
    const id = "com_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: CommChatMessageData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommChatMessageValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommChatMessage: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommChatMessageData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): CommChatMessageData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<CommChatMessageData>): CommChatMessageData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommChatMessageData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
