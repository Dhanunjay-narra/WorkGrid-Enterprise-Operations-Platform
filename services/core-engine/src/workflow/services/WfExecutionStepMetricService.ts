import { WfExecutionStepMetricData, WfExecutionStepMetricValidator } from "../../../../packages/types/src/domains/workflow/WfExecutionStepMetric";

export class WfExecutionStepMetricService {
  private repository = new Map<string, WfExecutionStepMetricData>();

  public create(data: Omit<WfExecutionStepMetricData, "id" | "createdAt" | "updatedAt">): WfExecutionStepMetricData {
    const id = "wor_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: WfExecutionStepMetricData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = WfExecutionStepMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WfExecutionStepMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WfExecutionStepMetricData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): WfExecutionStepMetricData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<WfExecutionStepMetricData>): WfExecutionStepMetricData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WfExecutionStepMetricData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
