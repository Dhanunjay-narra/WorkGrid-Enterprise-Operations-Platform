import { WorkflowNodesThresholdModel, WorkflowNodesThresholdValidator } from "@nexora/types/domains/workflow/nodes/WorkflowNodesThreshold";

export class WorkflowNodesThresholdService {
  private repository = new Map<string, WorkflowNodesThresholdModel>();

  public create(data: Omit<WorkflowNodesThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowNodesThresholdModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowNodesThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowNodesThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowNodesThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowNodesThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowNodesThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowNodesThresholdModel>): WorkflowNodesThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowNodesThresholdModel = {
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
