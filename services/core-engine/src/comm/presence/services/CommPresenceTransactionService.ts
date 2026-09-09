import { CommPresenceTransactionModel, CommPresenceTransactionValidator } from "@nexora/types/domains/comm/presence/CommPresenceTransaction";

export class CommPresenceTransactionService {
  private repository = new Map<string, CommPresenceTransactionModel>();

  public create(data: Omit<CommPresenceTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): CommPresenceTransactionModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommPresenceTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommPresenceTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommPresenceTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommPresenceTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommPresenceTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommPresenceTransactionModel>): CommPresenceTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommPresenceTransactionModel = {
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
