import { WorkflowNodesConfigModel, WorkflowNodesConfigValidator } from "@nexora/types/domains/workflow/nodes/WorkflowNodesConfig";

export class WorkflowNodesConfigService {
  private repository = new Map<string, WorkflowNodesConfigModel>();

  public create(data: Omit<WorkflowNodesConfigModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowNodesConfigModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowNodesConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowNodesConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowNodesConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowNodesConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowNodesConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowNodesConfigModel>): WorkflowNodesConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowNodesConfigModel = {
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
