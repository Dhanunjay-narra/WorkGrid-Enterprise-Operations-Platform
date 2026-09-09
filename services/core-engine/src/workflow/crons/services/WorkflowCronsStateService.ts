import { WorkflowCronsStateModel, WorkflowCronsStateValidator } from "@nexora/types/domains/workflow/crons/WorkflowCronsState";

export class WorkflowCronsStateService {
  private repository = new Map<string, WorkflowCronsStateModel>();

  public create(data: Omit<WorkflowCronsStateModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowCronsStateModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowCronsStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowCronsStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowCronsState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowCronsStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowCronsStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowCronsStateModel>): WorkflowCronsStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowCronsStateModel = {
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
