import { DmsChunksTransactionModel, DmsChunksTransactionValidator } from "@nexora/types/domains/dms/chunks/DmsChunksTransaction";

export class DmsChunksTransactionService {
  private repository = new Map<string, DmsChunksTransactionModel>();

  public create(data: Omit<DmsChunksTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): DmsChunksTransactionModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsChunksTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsChunksTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsChunksTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsChunksTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsChunksTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsChunksTransactionModel>): DmsChunksTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsChunksTransactionModel = {
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
