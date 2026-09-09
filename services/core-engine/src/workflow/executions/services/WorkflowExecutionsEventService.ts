import { WorkflowExecutionsEventModel, WorkflowExecutionsEventValidator } from "@nexora/types/domains/workflow/executions/WorkflowExecutionsEvent";

export class WorkflowExecutionsEventService {
  private repository = new Map<string, WorkflowExecutionsEventModel>();

  public create(data: Omit<WorkflowExecutionsEventModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowExecutionsEventModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowExecutionsEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowExecutionsEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowExecutionsEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowExecutionsEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowExecutionsEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowExecutionsEventModel>): WorkflowExecutionsEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowExecutionsEventModel = {
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
