import { HrPayrollSnapshotModel, HrPayrollSnapshotValidator } from "@nexora/types/domains/hr/payroll/HrPayrollSnapshot";

export class HrPayrollSnapshotService {
  private repository = new Map<string, HrPayrollSnapshotModel>();

  public create(data: Omit<HrPayrollSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): HrPayrollSnapshotModel {
    const id = "hr_p_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrPayrollSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrPayrollSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrPayrollSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrPayrollSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrPayrollSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrPayrollSnapshotModel>): HrPayrollSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrPayrollSnapshotModel = {
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
