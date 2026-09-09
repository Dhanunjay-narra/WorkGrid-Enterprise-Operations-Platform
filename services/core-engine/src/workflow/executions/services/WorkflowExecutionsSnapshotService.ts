import { WorkflowExecutionsSnapshotModel, WorkflowExecutionsSnapshotValidator } from "@nexora/types/domains/workflow/executions/WorkflowExecutionsSnapshot";

export class WorkflowExecutionsSnapshotService {
  private repository = new Map<string, WorkflowExecutionsSnapshotModel>();

  public create(data: Omit<WorkflowExecutionsSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowExecutionsSnapshotModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowExecutionsSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowExecutionsSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowExecutionsSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowExecutionsSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowExecutionsSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowExecutionsSnapshotModel>): WorkflowExecutionsSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowExecutionsSnapshotModel = {
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
