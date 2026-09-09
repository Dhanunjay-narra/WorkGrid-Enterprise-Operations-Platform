import { WorkflowDagAssignmentModel, WorkflowDagAssignmentValidator } from "@nexora/types/domains/workflow/dag/WorkflowDagAssignment";

export class WorkflowDagAssignmentService {
  private repository = new Map<string, WorkflowDagAssignmentModel>();

  public create(data: Omit<WorkflowDagAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowDagAssignmentModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowDagAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowDagAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowDagAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowDagAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowDagAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowDagAssignmentModel>): WorkflowDagAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowDagAssignmentModel = {
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
