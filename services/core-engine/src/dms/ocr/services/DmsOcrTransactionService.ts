import { DmsOcrTransactionModel, DmsOcrTransactionValidator } from "@nexora/types/domains/dms/ocr/DmsOcrTransaction";

export class DmsOcrTransactionService {
  private repository = new Map<string, DmsOcrTransactionModel>();

  public create(data: Omit<DmsOcrTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): DmsOcrTransactionModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsOcrTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsOcrTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsOcrTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsOcrTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsOcrTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsOcrTransactionModel>): DmsOcrTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsOcrTransactionModel = {
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
