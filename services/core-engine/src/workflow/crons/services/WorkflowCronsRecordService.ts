import { WorkflowCronsRecordModel, WorkflowCronsRecordValidator } from "@nexora/types/domains/workflow/crons/WorkflowCronsRecord";

export class WorkflowCronsRecordService {
  private repository = new Map<string, WorkflowCronsRecordModel>();

  public create(data: Omit<WorkflowCronsRecordModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowCronsRecordModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowCronsRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowCronsRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowCronsRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowCronsRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowCronsRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowCronsRecordModel>): WorkflowCronsRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowCronsRecordModel = {
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
