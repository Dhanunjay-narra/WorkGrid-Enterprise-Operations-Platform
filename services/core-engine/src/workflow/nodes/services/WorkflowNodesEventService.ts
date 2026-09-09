import { WorkflowNodesEventModel, WorkflowNodesEventValidator } from "@nexora/types/domains/workflow/nodes/WorkflowNodesEvent";

export class WorkflowNodesEventService {
  private repository = new Map<string, WorkflowNodesEventModel>();

  public create(data: Omit<WorkflowNodesEventModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowNodesEventModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowNodesEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowNodesEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowNodesEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowNodesEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowNodesEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowNodesEventModel>): WorkflowNodesEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowNodesEventModel = {
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
