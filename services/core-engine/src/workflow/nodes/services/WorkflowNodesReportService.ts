import { WorkflowNodesReportModel, WorkflowNodesReportValidator } from "@nexora/types/domains/workflow/nodes/WorkflowNodesReport";

export class WorkflowNodesReportService {
  private repository = new Map<string, WorkflowNodesReportModel>();

  public create(data: Omit<WorkflowNodesReportModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowNodesReportModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowNodesReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowNodesReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowNodesReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowNodesReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowNodesReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowNodesReportModel>): WorkflowNodesReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowNodesReportModel = {
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
