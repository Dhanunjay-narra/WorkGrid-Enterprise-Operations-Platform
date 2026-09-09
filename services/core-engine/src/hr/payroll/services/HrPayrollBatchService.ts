import { HrPayrollBatchModel, HrPayrollBatchValidator } from "@nexora/types/domains/hr/payroll/HrPayrollBatch";

export class HrPayrollBatchService {
  private repository = new Map<string, HrPayrollBatchModel>();

  public create(data: Omit<HrPayrollBatchModel, "id" | "version" | "createdAt" | "updatedAt">): HrPayrollBatchModel {
    const id = "hr_p_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrPayrollBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrPayrollBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrPayrollBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrPayrollBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrPayrollBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrPayrollBatchModel>): HrPayrollBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrPayrollBatchModel = {
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
