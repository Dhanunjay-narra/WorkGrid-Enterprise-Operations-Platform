import { FinanceTreasuryRecordModel, FinanceTreasuryRecordValidator } from "@nexora/types/domains/finance/treasury/FinanceTreasuryRecord";

export class FinanceTreasuryRecordService {
  private repository = new Map<string, FinanceTreasuryRecordModel>();

  public create(data: Omit<FinanceTreasuryRecordModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceTreasuryRecordModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceTreasuryRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceTreasuryRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceTreasuryRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceTreasuryRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceTreasuryRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceTreasuryRecordModel>): FinanceTreasuryRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceTreasuryRecordModel = {
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
