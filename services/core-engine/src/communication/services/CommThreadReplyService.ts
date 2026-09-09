import { CommThreadReplyData, CommThreadReplyValidator } from "../../../../packages/types/src/domains/communication/CommThreadReply";

export class CommThreadReplyService {
  private repository = new Map<string, CommThreadReplyData>();

  public create(data: Omit<CommThreadReplyData, "id" | "createdAt" | "updatedAt">): CommThreadReplyData {
    const id = "com_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: CommThreadReplyData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommThreadReplyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommThreadReply: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommThreadReplyData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): CommThreadReplyData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<CommThreadReplyData>): CommThreadReplyData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommThreadReplyData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
