import { HrPerformanceAuditLogModel, HrPerformanceAuditLogValidator } from "@nexora/types/domains/hr/performance/HrPerformanceAuditLog";

export class HrPerformanceAuditLogService {
  private repository = new Map<string, HrPerformanceAuditLogModel>();

  public create(data: Omit<HrPerformanceAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): HrPerformanceAuditLogModel {
    const id = "hr_p_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrPerformanceAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrPerformanceAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrPerformanceAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrPerformanceAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrPerformanceAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrPerformanceAuditLogModel>): HrPerformanceAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrPerformanceAuditLogModel = {
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
