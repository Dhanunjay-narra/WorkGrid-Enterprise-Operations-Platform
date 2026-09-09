import { WorkflowEdgesAssignmentModel, WorkflowEdgesAssignmentValidator } from "@nexora/types/domains/workflow/edges/WorkflowEdgesAssignment";

export class WorkflowEdgesAssignmentService {
  private repository = new Map<string, WorkflowEdgesAssignmentModel>();

  public create(data: Omit<WorkflowEdgesAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowEdgesAssignmentModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowEdgesAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowEdgesAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowEdgesAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowEdgesAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowEdgesAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowEdgesAssignmentModel>): WorkflowEdgesAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowEdgesAssignmentModel = {
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
