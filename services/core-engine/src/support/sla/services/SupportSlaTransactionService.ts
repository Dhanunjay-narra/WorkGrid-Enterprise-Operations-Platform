import { SupportSlaTransactionModel, SupportSlaTransactionValidator } from "@nexora/types/domains/support/sla/SupportSlaTransaction";

export class SupportSlaTransactionService {
  private repository = new Map<string, SupportSlaTransactionModel>();

  public create(data: Omit<SupportSlaTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): SupportSlaTransactionModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportSlaTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportSlaTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportSlaTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportSlaTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportSlaTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportSlaTransactionModel>): SupportSlaTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportSlaTransactionModel = {
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
