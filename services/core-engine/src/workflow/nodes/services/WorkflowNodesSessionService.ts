import { WorkflowNodesSessionModel, WorkflowNodesSessionValidator } from "@nexora/types/domains/workflow/nodes/WorkflowNodesSession";

export class WorkflowNodesSessionService {
  private repository = new Map<string, WorkflowNodesSessionModel>();

  public create(data: Omit<WorkflowNodesSessionModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowNodesSessionModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowNodesSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowNodesSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowNodesSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowNodesSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowNodesSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowNodesSessionModel>): WorkflowNodesSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowNodesSessionModel = {
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
