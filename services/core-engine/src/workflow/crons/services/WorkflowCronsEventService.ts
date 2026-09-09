import { WorkflowCronsEventModel, WorkflowCronsEventValidator } from "@nexora/types/domains/workflow/crons/WorkflowCronsEvent";

export class WorkflowCronsEventService {
  private repository = new Map<string, WorkflowCronsEventModel>();

  public create(data: Omit<WorkflowCronsEventModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowCronsEventModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowCronsEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowCronsEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowCronsEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowCronsEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowCronsEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowCronsEventModel>): WorkflowCronsEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowCronsEventModel = {
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
