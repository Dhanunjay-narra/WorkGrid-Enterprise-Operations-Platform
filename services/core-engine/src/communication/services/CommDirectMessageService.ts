import { CommDirectMessageData, CommDirectMessageValidator } from "../../../../packages/types/src/domains/communication/CommDirectMessage";

export class CommDirectMessageService {
  private repository = new Map<string, CommDirectMessageData>();

  public create(data: Omit<CommDirectMessageData, "id" | "createdAt" | "updatedAt">): CommDirectMessageData {
    const id = "com_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: CommDirectMessageData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommDirectMessageValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommDirectMessage: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommDirectMessageData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): CommDirectMessageData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<CommDirectMessageData>): CommDirectMessageData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommDirectMessageData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
