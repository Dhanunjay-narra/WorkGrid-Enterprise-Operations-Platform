import { WorkflowDagAuditLogModel, WorkflowDagAuditLogValidator } from "@nexora/types/domains/workflow/dag/WorkflowDagAuditLog";

export class WorkflowDagAuditLogService {
  private repository = new Map<string, WorkflowDagAuditLogModel>();

  public create(data: Omit<WorkflowDagAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowDagAuditLogModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowDagAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowDagAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowDagAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowDagAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowDagAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowDagAuditLogModel>): WorkflowDagAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowDagAuditLogModel = {
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
