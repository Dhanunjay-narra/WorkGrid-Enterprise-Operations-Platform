import { HrPayrollAuditLogModel, HrPayrollAuditLogValidator } from "@nexora/types/domains/hr/payroll/HrPayrollAuditLog";

export class HrPayrollAuditLogService {
  private repository = new Map<string, HrPayrollAuditLogModel>();

  public create(data: Omit<HrPayrollAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): HrPayrollAuditLogModel {
    const id = "hr_p_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrPayrollAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrPayrollAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrPayrollAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrPayrollAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrPayrollAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrPayrollAuditLogModel>): HrPayrollAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrPayrollAuditLogModel = {
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
