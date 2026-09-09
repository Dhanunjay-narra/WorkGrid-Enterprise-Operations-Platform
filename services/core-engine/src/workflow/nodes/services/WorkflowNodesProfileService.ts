import { WorkflowNodesProfileModel, WorkflowNodesProfileValidator } from "@nexora/types/domains/workflow/nodes/WorkflowNodesProfile";

export class WorkflowNodesProfileService {
  private repository = new Map<string, WorkflowNodesProfileModel>();

  public create(data: Omit<WorkflowNodesProfileModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowNodesProfileModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowNodesProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowNodesProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowNodesProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowNodesProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowNodesProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowNodesProfileModel>): WorkflowNodesProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowNodesProfileModel = {
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
