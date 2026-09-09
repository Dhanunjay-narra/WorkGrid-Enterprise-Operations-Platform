import { WorkflowDagPolicyModel, WorkflowDagPolicyValidator } from "@nexora/types/domains/workflow/dag/WorkflowDagPolicy";

export class WorkflowDagPolicyService {
  private repository = new Map<string, WorkflowDagPolicyModel>();

  public create(data: Omit<WorkflowDagPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowDagPolicyModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowDagPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowDagPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowDagPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowDagPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowDagPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowDagPolicyModel>): WorkflowDagPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowDagPolicyModel = {
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
