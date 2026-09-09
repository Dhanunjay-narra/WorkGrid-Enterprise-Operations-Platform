import { HrLeaveAuditLogModel, HrLeaveAuditLogValidator } from "@nexora/types/domains/hr/leave/HrLeaveAuditLog";

export class HrLeaveAuditLogService {
  private repository = new Map<string, HrLeaveAuditLogModel>();

  public create(data: Omit<HrLeaveAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): HrLeaveAuditLogModel {
    const id = "hr_l_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrLeaveAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrLeaveAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrLeaveAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrLeaveAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrLeaveAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrLeaveAuditLogModel>): HrLeaveAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrLeaveAuditLogModel = {
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
