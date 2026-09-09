import { WorkflowNodesAssignmentModel, WorkflowNodesAssignmentValidator } from "@nexora/types/domains/workflow/nodes/WorkflowNodesAssignment";

export class WorkflowNodesAssignmentService {
  private repository = new Map<string, WorkflowNodesAssignmentModel>();

  public create(data: Omit<WorkflowNodesAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowNodesAssignmentModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowNodesAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowNodesAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowNodesAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowNodesAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowNodesAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowNodesAssignmentModel>): WorkflowNodesAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowNodesAssignmentModel = {
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
