import { WorkflowEdgesSummaryModel, WorkflowEdgesSummaryValidator } from "@nexora/types/domains/workflow/edges/WorkflowEdgesSummary";

export class WorkflowEdgesSummaryService {
  private repository = new Map<string, WorkflowEdgesSummaryModel>();

  public create(data: Omit<WorkflowEdgesSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowEdgesSummaryModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowEdgesSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowEdgesSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowEdgesSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowEdgesSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowEdgesSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowEdgesSummaryModel>): WorkflowEdgesSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowEdgesSummaryModel = {
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
