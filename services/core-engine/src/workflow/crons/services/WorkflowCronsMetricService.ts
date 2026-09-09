import { WorkflowCronsMetricModel, WorkflowCronsMetricValidator } from "@nexora/types/domains/workflow/crons/WorkflowCronsMetric";

export class WorkflowCronsMetricService {
  private repository = new Map<string, WorkflowCronsMetricModel>();

  public create(data: Omit<WorkflowCronsMetricModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowCronsMetricModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowCronsMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowCronsMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowCronsMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowCronsMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowCronsMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowCronsMetricModel>): WorkflowCronsMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowCronsMetricModel = {
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
