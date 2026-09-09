import { WorkflowDagStateModel, WorkflowDagStateValidator } from "@nexora/types/domains/workflow/dag/WorkflowDagState";

export class WorkflowDagStateService {
  private repository = new Map<string, WorkflowDagStateModel>();

  public create(data: Omit<WorkflowDagStateModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowDagStateModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowDagStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowDagStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowDagState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowDagStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowDagStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowDagStateModel>): WorkflowDagStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowDagStateModel = {
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
