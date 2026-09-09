import { HrEmployeesTransactionModel, HrEmployeesTransactionValidator } from "@nexora/types/domains/hr/employees/HrEmployeesTransaction";

export class HrEmployeesTransactionService {
  private repository = new Map<string, HrEmployeesTransactionModel>();

  public create(data: Omit<HrEmployeesTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): HrEmployeesTransactionModel {
    const id = "hr_e_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrEmployeesTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrEmployeesTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrEmployeesTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrEmployeesTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrEmployeesTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrEmployeesTransactionModel>): HrEmployeesTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrEmployeesTransactionModel = {
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
