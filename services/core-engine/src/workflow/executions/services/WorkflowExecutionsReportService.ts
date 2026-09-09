import { WorkflowExecutionsReportModel, WorkflowExecutionsReportValidator } from "@nexora/types/domains/workflow/executions/WorkflowExecutionsReport";

export class WorkflowExecutionsReportService {
  private repository = new Map<string, WorkflowExecutionsReportModel>();

  public create(data: Omit<WorkflowExecutionsReportModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowExecutionsReportModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowExecutionsReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowExecutionsReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowExecutionsReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowExecutionsReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowExecutionsReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowExecutionsReportModel>): WorkflowExecutionsReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowExecutionsReportModel = {
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
