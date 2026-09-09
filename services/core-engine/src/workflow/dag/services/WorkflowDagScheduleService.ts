import { WorkflowDagScheduleModel, WorkflowDagScheduleValidator } from "@nexora/types/domains/workflow/dag/WorkflowDagSchedule";

export class WorkflowDagScheduleService {
  private repository = new Map<string, WorkflowDagScheduleModel>();

  public create(data: Omit<WorkflowDagScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowDagScheduleModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowDagScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowDagScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowDagSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowDagScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowDagScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowDagScheduleModel>): WorkflowDagScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowDagScheduleModel = {
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
