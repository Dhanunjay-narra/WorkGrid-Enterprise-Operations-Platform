import { WorkflowRetriesSnapshotModel, WorkflowRetriesSnapshotValidator } from "@nexora/types/domains/workflow/retries/WorkflowRetriesSnapshot";

export class WorkflowRetriesSnapshotService {
  private repository = new Map<string, WorkflowRetriesSnapshotModel>();

  public create(data: Omit<WorkflowRetriesSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowRetriesSnapshotModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowRetriesSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowRetriesSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowRetriesSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowRetriesSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowRetriesSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowRetriesSnapshotModel>): WorkflowRetriesSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowRetriesSnapshotModel = {
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
