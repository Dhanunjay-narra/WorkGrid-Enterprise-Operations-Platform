import { WorkflowRetriesItemModel, WorkflowRetriesItemValidator } from "@nexora/types/domains/workflow/retries/WorkflowRetriesItem";

export class WorkflowRetriesItemService {
  private repository = new Map<string, WorkflowRetriesItemModel>();

  public create(data: Omit<WorkflowRetriesItemModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowRetriesItemModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowRetriesItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowRetriesItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowRetriesItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowRetriesItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowRetriesItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowRetriesItemModel>): WorkflowRetriesItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowRetriesItemModel = {
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
