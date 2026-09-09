import { WorkflowRetriesQueueModel, WorkflowRetriesQueueValidator } from "@nexora/types/domains/workflow/retries/WorkflowRetriesQueue";

export class WorkflowRetriesQueueService {
  private repository = new Map<string, WorkflowRetriesQueueModel>();

  public create(data: Omit<WorkflowRetriesQueueModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowRetriesQueueModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowRetriesQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowRetriesQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowRetriesQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowRetriesQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowRetriesQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowRetriesQueueModel>): WorkflowRetriesQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowRetriesQueueModel = {
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
