import { SupportCsatTransactionModel, SupportCsatTransactionValidator } from "@nexora/types/domains/support/csat/SupportCsatTransaction";

export class SupportCsatTransactionService {
  private repository = new Map<string, SupportCsatTransactionModel>();

  public create(data: Omit<SupportCsatTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): SupportCsatTransactionModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportCsatTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportCsatTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportCsatTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportCsatTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportCsatTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportCsatTransactionModel>): SupportCsatTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportCsatTransactionModel = {
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
