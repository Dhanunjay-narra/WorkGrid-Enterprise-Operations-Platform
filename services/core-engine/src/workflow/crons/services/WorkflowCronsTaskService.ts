import { WorkflowCronsTaskModel, WorkflowCronsTaskValidator } from "@nexora/types/domains/workflow/crons/WorkflowCronsTask";

export class WorkflowCronsTaskService {
  private repository = new Map<string, WorkflowCronsTaskModel>();

  public create(data: Omit<WorkflowCronsTaskModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowCronsTaskModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowCronsTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowCronsTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowCronsTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowCronsTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowCronsTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowCronsTaskModel>): WorkflowCronsTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowCronsTaskModel = {
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
