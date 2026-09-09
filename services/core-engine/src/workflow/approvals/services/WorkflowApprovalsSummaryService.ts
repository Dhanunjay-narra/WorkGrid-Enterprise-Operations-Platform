import { WorkflowApprovalsSummaryModel, WorkflowApprovalsSummaryValidator } from "@nexora/types/domains/workflow/approvals/WorkflowApprovalsSummary";

export class WorkflowApprovalsSummaryService {
  private repository = new Map<string, WorkflowApprovalsSummaryModel>();

  public create(data: Omit<WorkflowApprovalsSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowApprovalsSummaryModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowApprovalsSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowApprovalsSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowApprovalsSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowApprovalsSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowApprovalsSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowApprovalsSummaryModel>): WorkflowApprovalsSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowApprovalsSummaryModel = {
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
