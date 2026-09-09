import { WorkflowDagEventModel, WorkflowDagEventValidator } from "@nexora/types/domains/workflow/dag/WorkflowDagEvent";

export class WorkflowDagEventService {
  private repository = new Map<string, WorkflowDagEventModel>();

  public create(data: Omit<WorkflowDagEventModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowDagEventModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowDagEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowDagEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowDagEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowDagEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowDagEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowDagEventModel>): WorkflowDagEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowDagEventModel = {
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
