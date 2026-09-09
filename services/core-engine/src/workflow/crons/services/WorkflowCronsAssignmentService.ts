import { WorkflowCronsAssignmentModel, WorkflowCronsAssignmentValidator } from "@nexora/types/domains/workflow/crons/WorkflowCronsAssignment";

export class WorkflowCronsAssignmentService {
  private repository = new Map<string, WorkflowCronsAssignmentModel>();

  public create(data: Omit<WorkflowCronsAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowCronsAssignmentModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowCronsAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowCronsAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowCronsAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowCronsAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowCronsAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowCronsAssignmentModel>): WorkflowCronsAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowCronsAssignmentModel = {
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
