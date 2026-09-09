import { WorkflowNodesStateModel, WorkflowNodesStateValidator } from "@nexora/types/domains/workflow/nodes/WorkflowNodesState";

export class WorkflowNodesStateService {
  private repository = new Map<string, WorkflowNodesStateModel>();

  public create(data: Omit<WorkflowNodesStateModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowNodesStateModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowNodesStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowNodesStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowNodesState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowNodesStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowNodesStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowNodesStateModel>): WorkflowNodesStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowNodesStateModel = {
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
