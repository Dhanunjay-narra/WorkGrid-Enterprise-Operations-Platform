import { HrDepartmentsTransactionModel, HrDepartmentsTransactionValidator } from "@nexora/types/domains/hr/departments/HrDepartmentsTransaction";

export class HrDepartmentsTransactionService {
  private repository = new Map<string, HrDepartmentsTransactionModel>();

  public create(data: Omit<HrDepartmentsTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): HrDepartmentsTransactionModel {
    const id = "hr_d_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrDepartmentsTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrDepartmentsTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrDepartmentsTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrDepartmentsTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrDepartmentsTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrDepartmentsTransactionModel>): HrDepartmentsTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrDepartmentsTransactionModel = {
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
