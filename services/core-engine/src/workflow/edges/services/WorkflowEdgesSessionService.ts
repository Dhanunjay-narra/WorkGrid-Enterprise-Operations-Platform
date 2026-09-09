import { WorkflowEdgesSessionModel, WorkflowEdgesSessionValidator } from "@nexora/types/domains/workflow/edges/WorkflowEdgesSession";

export class WorkflowEdgesSessionService {
  private repository = new Map<string, WorkflowEdgesSessionModel>();

  public create(data: Omit<WorkflowEdgesSessionModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowEdgesSessionModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowEdgesSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowEdgesSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowEdgesSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowEdgesSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowEdgesSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowEdgesSessionModel>): WorkflowEdgesSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowEdgesSessionModel = {
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
