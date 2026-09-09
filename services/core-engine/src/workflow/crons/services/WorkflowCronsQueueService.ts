import { WorkflowCronsQueueModel, WorkflowCronsQueueValidator } from "@nexora/types/domains/workflow/crons/WorkflowCronsQueue";

export class WorkflowCronsQueueService {
  private repository = new Map<string, WorkflowCronsQueueModel>();

  public create(data: Omit<WorkflowCronsQueueModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowCronsQueueModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowCronsQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowCronsQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowCronsQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowCronsQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowCronsQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowCronsQueueModel>): WorkflowCronsQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowCronsQueueModel = {
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
