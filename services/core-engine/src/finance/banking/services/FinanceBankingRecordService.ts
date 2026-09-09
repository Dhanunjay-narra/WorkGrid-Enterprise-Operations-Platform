import { FinanceBankingRecordModel, FinanceBankingRecordValidator } from "@nexora/types/domains/finance/banking/FinanceBankingRecord";

export class FinanceBankingRecordService {
  private repository = new Map<string, FinanceBankingRecordModel>();

  public create(data: Omit<FinanceBankingRecordModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceBankingRecordModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceBankingRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceBankingRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceBankingRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceBankingRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceBankingRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceBankingRecordModel>): FinanceBankingRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceBankingRecordModel = {
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
