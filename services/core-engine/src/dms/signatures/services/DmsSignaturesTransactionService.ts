import { DmsSignaturesTransactionModel, DmsSignaturesTransactionValidator } from "@nexora/types/domains/dms/signatures/DmsSignaturesTransaction";

export class DmsSignaturesTransactionService {
  private repository = new Map<string, DmsSignaturesTransactionModel>();

  public create(data: Omit<DmsSignaturesTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): DmsSignaturesTransactionModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsSignaturesTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsSignaturesTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsSignaturesTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsSignaturesTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsSignaturesTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsSignaturesTransactionModel>): DmsSignaturesTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsSignaturesTransactionModel = {
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
