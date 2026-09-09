import { WorkflowEdgesQueueModel, WorkflowEdgesQueueValidator } from "@nexora/types/domains/workflow/edges/WorkflowEdgesQueue";

export class WorkflowEdgesQueueService {
  private repository = new Map<string, WorkflowEdgesQueueModel>();

  public create(data: Omit<WorkflowEdgesQueueModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowEdgesQueueModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowEdgesQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowEdgesQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowEdgesQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowEdgesQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowEdgesQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowEdgesQueueModel>): WorkflowEdgesQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowEdgesQueueModel = {
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
