import { WorkflowDagSummaryModel, WorkflowDagSummaryValidator } from "@nexora/types/domains/workflow/dag/WorkflowDagSummary";

export class WorkflowDagSummaryService {
  private repository = new Map<string, WorkflowDagSummaryModel>();

  public create(data: Omit<WorkflowDagSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowDagSummaryModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowDagSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowDagSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowDagSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowDagSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowDagSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowDagSummaryModel>): WorkflowDagSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowDagSummaryModel = {
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
