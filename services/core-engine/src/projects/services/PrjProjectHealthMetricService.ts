import { PrjProjectHealthMetricData, PrjProjectHealthMetricValidator } from "../../../../packages/types/src/domains/projects/PrjProjectHealthMetric";

export class PrjProjectHealthMetricService {
  private repository = new Map<string, PrjProjectHealthMetricData>();

  public create(data: Omit<PrjProjectHealthMetricData, "id" | "createdAt" | "updatedAt">): PrjProjectHealthMetricData {
    const id = "pro_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: PrjProjectHealthMetricData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = PrjProjectHealthMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for PrjProjectHealthMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): PrjProjectHealthMetricData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): PrjProjectHealthMetricData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<PrjProjectHealthMetricData>): PrjProjectHealthMetricData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: PrjProjectHealthMetricData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
