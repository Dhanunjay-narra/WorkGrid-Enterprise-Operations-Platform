import { WorkflowNodesNodeModel, WorkflowNodesNodeValidator } from "@nexora/types/domains/workflow/nodes/WorkflowNodesNode";

export class WorkflowNodesNodeService {
  private repository = new Map<string, WorkflowNodesNodeModel>();

  public create(data: Omit<WorkflowNodesNodeModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowNodesNodeModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowNodesNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowNodesNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowNodesNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowNodesNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowNodesNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowNodesNodeModel>): WorkflowNodesNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowNodesNodeModel = {
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
