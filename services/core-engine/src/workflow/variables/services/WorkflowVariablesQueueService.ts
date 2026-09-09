import { WorkflowVariablesQueueModel, WorkflowVariablesQueueValidator } from "@nexora/types/domains/workflow/variables/WorkflowVariablesQueue";

export class WorkflowVariablesQueueService {
  private repository = new Map<string, WorkflowVariablesQueueModel>();

  public create(data: Omit<WorkflowVariablesQueueModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowVariablesQueueModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowVariablesQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowVariablesQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowVariablesQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowVariablesQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowVariablesQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowVariablesQueueModel>): WorkflowVariablesQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowVariablesQueueModel = {
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
