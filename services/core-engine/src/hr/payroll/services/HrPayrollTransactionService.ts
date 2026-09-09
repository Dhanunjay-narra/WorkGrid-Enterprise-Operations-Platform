import { HrPayrollTransactionModel, HrPayrollTransactionValidator } from "@nexora/types/domains/hr/payroll/HrPayrollTransaction";

export class HrPayrollTransactionService {
  private repository = new Map<string, HrPayrollTransactionModel>();

  public create(data: Omit<HrPayrollTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): HrPayrollTransactionModel {
    const id = "hr_p_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrPayrollTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrPayrollTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrPayrollTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrPayrollTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrPayrollTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrPayrollTransactionModel>): HrPayrollTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrPayrollTransactionModel = {
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
