import { WorkflowDagProfileModel, WorkflowDagProfileValidator } from "@nexora/types/domains/workflow/dag/WorkflowDagProfile";

export class WorkflowDagProfileService {
  private repository = new Map<string, WorkflowDagProfileModel>();

  public create(data: Omit<WorkflowDagProfileModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowDagProfileModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowDagProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowDagProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowDagProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowDagProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowDagProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowDagProfileModel>): WorkflowDagProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowDagProfileModel = {
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
