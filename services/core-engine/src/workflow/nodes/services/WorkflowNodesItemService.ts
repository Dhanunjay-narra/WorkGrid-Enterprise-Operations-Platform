import { WorkflowNodesItemModel, WorkflowNodesItemValidator } from "@nexora/types/domains/workflow/nodes/WorkflowNodesItem";

export class WorkflowNodesItemService {
  private repository = new Map<string, WorkflowNodesItemModel>();

  public create(data: Omit<WorkflowNodesItemModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowNodesItemModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowNodesItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowNodesItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowNodesItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowNodesItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowNodesItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowNodesItemModel>): WorkflowNodesItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowNodesItemModel = {
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
