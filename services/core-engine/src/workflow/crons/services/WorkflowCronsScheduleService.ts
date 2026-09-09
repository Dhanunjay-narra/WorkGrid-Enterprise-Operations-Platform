import { WorkflowCronsScheduleModel, WorkflowCronsScheduleValidator } from "@nexora/types/domains/workflow/crons/WorkflowCronsSchedule";

export class WorkflowCronsScheduleService {
  private repository = new Map<string, WorkflowCronsScheduleModel>();

  public create(data: Omit<WorkflowCronsScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowCronsScheduleModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowCronsScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowCronsScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowCronsSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowCronsScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowCronsScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowCronsScheduleModel>): WorkflowCronsScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowCronsScheduleModel = {
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
