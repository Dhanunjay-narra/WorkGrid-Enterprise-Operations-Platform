import { WorkflowCronsReportModel, WorkflowCronsReportValidator } from "@nexora/types/domains/workflow/crons/WorkflowCronsReport";

export class WorkflowCronsReportService {
  private repository = new Map<string, WorkflowCronsReportModel>();

  public create(data: Omit<WorkflowCronsReportModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowCronsReportModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowCronsReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowCronsReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowCronsReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowCronsReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowCronsReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowCronsReportModel>): WorkflowCronsReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowCronsReportModel = {
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
