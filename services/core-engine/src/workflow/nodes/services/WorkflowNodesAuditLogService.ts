import { WorkflowNodesAuditLogModel, WorkflowNodesAuditLogValidator } from "@nexora/types/domains/workflow/nodes/WorkflowNodesAuditLog";

export class WorkflowNodesAuditLogService {
  private repository = new Map<string, WorkflowNodesAuditLogModel>();

  public create(data: Omit<WorkflowNodesAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowNodesAuditLogModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowNodesAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowNodesAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowNodesAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowNodesAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowNodesAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowNodesAuditLogModel>): WorkflowNodesAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowNodesAuditLogModel = {
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
