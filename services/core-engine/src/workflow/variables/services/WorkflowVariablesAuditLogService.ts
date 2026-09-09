import { WorkflowVariablesAuditLogModel, WorkflowVariablesAuditLogValidator } from "@nexora/types/domains/workflow/variables/WorkflowVariablesAuditLog";

export class WorkflowVariablesAuditLogService {
  private repository = new Map<string, WorkflowVariablesAuditLogModel>();

  public create(data: Omit<WorkflowVariablesAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowVariablesAuditLogModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowVariablesAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowVariablesAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowVariablesAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowVariablesAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowVariablesAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowVariablesAuditLogModel>): WorkflowVariablesAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowVariablesAuditLogModel = {
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
