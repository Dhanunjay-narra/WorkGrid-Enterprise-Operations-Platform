import { WorkflowCronsNodeModel, WorkflowCronsNodeValidator } from "@nexora/types/domains/workflow/crons/WorkflowCronsNode";

export class WorkflowCronsNodeService {
  private repository = new Map<string, WorkflowCronsNodeModel>();

  public create(data: Omit<WorkflowCronsNodeModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowCronsNodeModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowCronsNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowCronsNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowCronsNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowCronsNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowCronsNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowCronsNodeModel>): WorkflowCronsNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowCronsNodeModel = {
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
