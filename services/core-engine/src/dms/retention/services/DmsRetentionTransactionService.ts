import { DmsRetentionTransactionModel, DmsRetentionTransactionValidator } from "@nexora/types/domains/dms/retention/DmsRetentionTransaction";

export class DmsRetentionTransactionService {
  private repository = new Map<string, DmsRetentionTransactionModel>();

  public create(data: Omit<DmsRetentionTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): DmsRetentionTransactionModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsRetentionTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsRetentionTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsRetentionTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsRetentionTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsRetentionTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsRetentionTransactionModel>): DmsRetentionTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsRetentionTransactionModel = {
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
