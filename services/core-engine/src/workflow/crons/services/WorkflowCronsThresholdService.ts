import { WorkflowCronsThresholdModel, WorkflowCronsThresholdValidator } from "@nexora/types/domains/workflow/crons/WorkflowCronsThreshold";

export class WorkflowCronsThresholdService {
  private repository = new Map<string, WorkflowCronsThresholdModel>();

  public create(data: Omit<WorkflowCronsThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowCronsThresholdModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowCronsThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowCronsThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowCronsThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowCronsThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowCronsThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowCronsThresholdModel>): WorkflowCronsThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowCronsThresholdModel = {
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
