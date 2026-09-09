import { WorkflowVariablesStateModel, WorkflowVariablesStateValidator } from "@nexora/types/domains/workflow/variables/WorkflowVariablesState";

export class WorkflowVariablesStateService {
  private repository = new Map<string, WorkflowVariablesStateModel>();

  public create(data: Omit<WorkflowVariablesStateModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowVariablesStateModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowVariablesStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowVariablesStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowVariablesState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowVariablesStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowVariablesStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowVariablesStateModel>): WorkflowVariablesStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowVariablesStateModel = {
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
