import { WorkflowRetriesEventModel, WorkflowRetriesEventValidator } from "@nexora/types/domains/workflow/retries/WorkflowRetriesEvent";

export class WorkflowRetriesEventService {
  private repository = new Map<string, WorkflowRetriesEventModel>();

  public create(data: Omit<WorkflowRetriesEventModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowRetriesEventModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowRetriesEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowRetriesEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowRetriesEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowRetriesEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowRetriesEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowRetriesEventModel>): WorkflowRetriesEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowRetriesEventModel = {
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
