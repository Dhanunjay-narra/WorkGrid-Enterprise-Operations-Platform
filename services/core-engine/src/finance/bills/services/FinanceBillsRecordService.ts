import { FinanceBillsRecordModel, FinanceBillsRecordValidator } from "@nexora/types/domains/finance/bills/FinanceBillsRecord";

export class FinanceBillsRecordService {
  private repository = new Map<string, FinanceBillsRecordModel>();

  public create(data: Omit<FinanceBillsRecordModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceBillsRecordModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceBillsRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceBillsRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceBillsRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceBillsRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceBillsRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceBillsRecordModel>): FinanceBillsRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceBillsRecordModel = {
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
