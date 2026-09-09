import { WorkflowCronsSnapshotModel, WorkflowCronsSnapshotValidator } from "@nexora/types/domains/workflow/crons/WorkflowCronsSnapshot";

export class WorkflowCronsSnapshotService {
  private repository = new Map<string, WorkflowCronsSnapshotModel>();

  public create(data: Omit<WorkflowCronsSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowCronsSnapshotModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowCronsSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowCronsSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowCronsSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowCronsSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowCronsSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowCronsSnapshotModel>): WorkflowCronsSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowCronsSnapshotModel = {
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
