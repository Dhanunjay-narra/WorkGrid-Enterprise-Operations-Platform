import { CommChannelsTransactionModel, CommChannelsTransactionValidator } from "@nexora/types/domains/comm/channels/CommChannelsTransaction";

export class CommChannelsTransactionService {
  private repository = new Map<string, CommChannelsTransactionModel>();

  public create(data: Omit<CommChannelsTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): CommChannelsTransactionModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommChannelsTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommChannelsTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommChannelsTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommChannelsTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommChannelsTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommChannelsTransactionModel>): CommChannelsTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommChannelsTransactionModel = {
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
