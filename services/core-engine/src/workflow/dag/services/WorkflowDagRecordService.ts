import { WorkflowDagRecordModel, WorkflowDagRecordValidator } from "@nexora/types/domains/workflow/dag/WorkflowDagRecord";

export class WorkflowDagRecordService {
  private repository = new Map<string, WorkflowDagRecordModel>();

  public create(data: Omit<WorkflowDagRecordModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowDagRecordModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowDagRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowDagRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowDagRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowDagRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowDagRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowDagRecordModel>): WorkflowDagRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowDagRecordModel = {
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
