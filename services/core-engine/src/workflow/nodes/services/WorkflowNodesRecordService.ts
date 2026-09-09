import { WorkflowNodesRecordModel, WorkflowNodesRecordValidator } from "@nexora/types/domains/workflow/nodes/WorkflowNodesRecord";

export class WorkflowNodesRecordService {
  private repository = new Map<string, WorkflowNodesRecordModel>();

  public create(data: Omit<WorkflowNodesRecordModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowNodesRecordModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowNodesRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowNodesRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowNodesRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowNodesRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowNodesRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowNodesRecordModel>): WorkflowNodesRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowNodesRecordModel = {
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
