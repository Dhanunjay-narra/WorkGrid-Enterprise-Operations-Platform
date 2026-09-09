import { WorkflowNodesSummaryModel, WorkflowNodesSummaryValidator } from "@nexora/types/domains/workflow/nodes/WorkflowNodesSummary";

export class WorkflowNodesSummaryService {
  private repository = new Map<string, WorkflowNodesSummaryModel>();

  public create(data: Omit<WorkflowNodesSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowNodesSummaryModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowNodesSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowNodesSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowNodesSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowNodesSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowNodesSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowNodesSummaryModel>): WorkflowNodesSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowNodesSummaryModel = {
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
