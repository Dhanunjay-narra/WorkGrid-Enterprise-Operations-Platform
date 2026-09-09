import { WorkflowDagNodeModel, WorkflowDagNodeValidator } from "@nexora/types/domains/workflow/dag/WorkflowDagNode";

export class WorkflowDagNodeService {
  private repository = new Map<string, WorkflowDagNodeModel>();

  public create(data: Omit<WorkflowDagNodeModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowDagNodeModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowDagNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowDagNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowDagNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowDagNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowDagNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowDagNodeModel>): WorkflowDagNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowDagNodeModel = {
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
