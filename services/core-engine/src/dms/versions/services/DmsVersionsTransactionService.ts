import { DmsVersionsTransactionModel, DmsVersionsTransactionValidator } from "@nexora/types/domains/dms/versions/DmsVersionsTransaction";

export class DmsVersionsTransactionService {
  private repository = new Map<string, DmsVersionsTransactionModel>();

  public create(data: Omit<DmsVersionsTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): DmsVersionsTransactionModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsVersionsTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsVersionsTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsVersionsTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsVersionsTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsVersionsTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsVersionsTransactionModel>): DmsVersionsTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsVersionsTransactionModel = {
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
