import { WorkflowDagSessionModel, WorkflowDagSessionValidator } from "@nexora/types/domains/workflow/dag/WorkflowDagSession";

export class WorkflowDagSessionService {
  private repository = new Map<string, WorkflowDagSessionModel>();

  public create(data: Omit<WorkflowDagSessionModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowDagSessionModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowDagSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowDagSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowDagSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowDagSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowDagSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowDagSessionModel>): WorkflowDagSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowDagSessionModel = {
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
