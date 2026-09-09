import { EvtPublishMetricData, EvtPublishMetricValidator } from "../../../../packages/types/src/domains/events/EvtPublishMetric";

export class EvtPublishMetricService {
  private repository = new Map<string, EvtPublishMetricData>();

  public create(data: Omit<EvtPublishMetricData, "id" | "createdAt" | "updatedAt">): EvtPublishMetricData {
    const id = "eve_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: EvtPublishMetricData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = EvtPublishMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EvtPublishMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EvtPublishMetricData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): EvtPublishMetricData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<EvtPublishMetricData>): EvtPublishMetricData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EvtPublishMetricData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
