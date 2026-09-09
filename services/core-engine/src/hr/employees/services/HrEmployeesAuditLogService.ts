import { HrEmployeesAuditLogModel, HrEmployeesAuditLogValidator } from "@nexora/types/domains/hr/employees/HrEmployeesAuditLog";

export class HrEmployeesAuditLogService {
  private repository = new Map<string, HrEmployeesAuditLogModel>();

  public create(data: Omit<HrEmployeesAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): HrEmployeesAuditLogModel {
    const id = "hr_e_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrEmployeesAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrEmployeesAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrEmployeesAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrEmployeesAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrEmployeesAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrEmployeesAuditLogModel>): HrEmployeesAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrEmployeesAuditLogModel = {
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
