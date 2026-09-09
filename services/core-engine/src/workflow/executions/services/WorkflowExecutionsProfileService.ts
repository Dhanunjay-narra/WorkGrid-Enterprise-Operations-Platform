import { WorkflowExecutionsProfileModel, WorkflowExecutionsProfileValidator } from "@nexora/types/domains/workflow/executions/WorkflowExecutionsProfile";

export class WorkflowExecutionsProfileService {
  private repository = new Map<string, WorkflowExecutionsProfileModel>();

  public create(data: Omit<WorkflowExecutionsProfileModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowExecutionsProfileModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowExecutionsProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowExecutionsProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowExecutionsProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowExecutionsProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowExecutionsProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowExecutionsProfileModel>): WorkflowExecutionsProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowExecutionsProfileModel = {
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
