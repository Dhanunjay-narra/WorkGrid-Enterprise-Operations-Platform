import { FinanceTaxesRecordModel, FinanceTaxesRecordValidator } from "@nexora/types/domains/finance/taxes/FinanceTaxesRecord";

export class FinanceTaxesRecordService {
  private repository = new Map<string, FinanceTaxesRecordModel>();

  public create(data: Omit<FinanceTaxesRecordModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceTaxesRecordModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceTaxesRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceTaxesRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceTaxesRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceTaxesRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceTaxesRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceTaxesRecordModel>): FinanceTaxesRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceTaxesRecordModel = {
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
