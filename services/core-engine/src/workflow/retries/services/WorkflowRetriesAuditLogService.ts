import { WorkflowRetriesAuditLogModel, WorkflowRetriesAuditLogValidator } from "@nexora/types/domains/workflow/retries/WorkflowRetriesAuditLog";

export class WorkflowRetriesAuditLogService {
  private repository = new Map<string, WorkflowRetriesAuditLogModel>();

  public create(data: Omit<WorkflowRetriesAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowRetriesAuditLogModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowRetriesAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowRetriesAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowRetriesAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowRetriesAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowRetriesAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowRetriesAuditLogModel>): WorkflowRetriesAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowRetriesAuditLogModel = {
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
