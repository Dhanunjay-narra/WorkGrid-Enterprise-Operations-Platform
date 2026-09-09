import { HrPayrollQueueModel, HrPayrollQueueValidator } from "@nexora/types/domains/hr/payroll/HrPayrollQueue";

export class HrPayrollQueueService {
  private repository = new Map<string, HrPayrollQueueModel>();

  public create(data: Omit<HrPayrollQueueModel, "id" | "version" | "createdAt" | "updatedAt">): HrPayrollQueueModel {
    const id = "hr_p_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrPayrollQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrPayrollQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrPayrollQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrPayrollQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrPayrollQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrPayrollQueueModel>): HrPayrollQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrPayrollQueueModel = {
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
