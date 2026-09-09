import { CommMessageReactionData, CommMessageReactionValidator } from "../../../../packages/types/src/domains/communication/CommMessageReaction";

export class CommMessageReactionService {
  private repository = new Map<string, CommMessageReactionData>();

  public create(data: Omit<CommMessageReactionData, "id" | "createdAt" | "updatedAt">): CommMessageReactionData {
    const id = "com_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: CommMessageReactionData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommMessageReactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommMessageReaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommMessageReactionData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): CommMessageReactionData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<CommMessageReactionData>): CommMessageReactionData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommMessageReactionData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
