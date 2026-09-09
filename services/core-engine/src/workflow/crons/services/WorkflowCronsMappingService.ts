import { WorkflowCronsMappingModel, WorkflowCronsMappingValidator } from "@nexora/types/domains/workflow/crons/WorkflowCronsMapping";

export class WorkflowCronsMappingService {
  private repository = new Map<string, WorkflowCronsMappingModel>();

  public create(data: Omit<WorkflowCronsMappingModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowCronsMappingModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowCronsMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowCronsMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowCronsMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowCronsMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowCronsMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowCronsMappingModel>): WorkflowCronsMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowCronsMappingModel = {
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
