import { WorkflowCronsAuditLogModel, WorkflowCronsAuditLogValidator } from "@nexora/types/domains/workflow/crons/WorkflowCronsAuditLog";

export class WorkflowCronsAuditLogService {
  private repository = new Map<string, WorkflowCronsAuditLogModel>();

  public create(data: Omit<WorkflowCronsAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowCronsAuditLogModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowCronsAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowCronsAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowCronsAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowCronsAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowCronsAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowCronsAuditLogModel>): WorkflowCronsAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowCronsAuditLogModel = {
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
