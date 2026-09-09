import { WorkflowNodesBatchModel, WorkflowNodesBatchValidator } from "@nexora/types/domains/workflow/nodes/WorkflowNodesBatch";

export class WorkflowNodesBatchService {
  private repository = new Map<string, WorkflowNodesBatchModel>();

  public create(data: Omit<WorkflowNodesBatchModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowNodesBatchModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowNodesBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowNodesBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowNodesBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowNodesBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowNodesBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowNodesBatchModel>): WorkflowNodesBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowNodesBatchModel = {
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
