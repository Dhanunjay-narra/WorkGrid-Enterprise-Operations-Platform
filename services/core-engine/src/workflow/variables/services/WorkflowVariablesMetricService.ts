import { WorkflowVariablesMetricModel, WorkflowVariablesMetricValidator } from "@nexora/types/domains/workflow/variables/WorkflowVariablesMetric";

export class WorkflowVariablesMetricService {
  private repository = new Map<string, WorkflowVariablesMetricModel>();

  public create(data: Omit<WorkflowVariablesMetricModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowVariablesMetricModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowVariablesMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowVariablesMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowVariablesMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowVariablesMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowVariablesMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowVariablesMetricModel>): WorkflowVariablesMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowVariablesMetricModel = {
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
