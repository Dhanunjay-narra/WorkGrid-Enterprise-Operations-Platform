import { WorkflowExecutionsItemModel, WorkflowExecutionsItemValidator } from "@nexora/types/domains/workflow/executions/WorkflowExecutionsItem";

export class WorkflowExecutionsItemService {
  private repository = new Map<string, WorkflowExecutionsItemModel>();

  public create(data: Omit<WorkflowExecutionsItemModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowExecutionsItemModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowExecutionsItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowExecutionsItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowExecutionsItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowExecutionsItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowExecutionsItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowExecutionsItemModel>): WorkflowExecutionsItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowExecutionsItemModel = {
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
