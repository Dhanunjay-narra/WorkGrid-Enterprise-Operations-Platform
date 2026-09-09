import { WorkflowNodesMappingModel, WorkflowNodesMappingValidator } from "@nexora/types/domains/workflow/nodes/WorkflowNodesMapping";

export class WorkflowNodesMappingService {
  private repository = new Map<string, WorkflowNodesMappingModel>();

  public create(data: Omit<WorkflowNodesMappingModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowNodesMappingModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowNodesMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowNodesMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowNodesMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowNodesMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowNodesMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowNodesMappingModel>): WorkflowNodesMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowNodesMappingModel = {
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
