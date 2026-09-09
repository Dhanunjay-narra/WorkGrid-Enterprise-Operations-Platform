import { IotTelemetryMetricData, IotTelemetryMetricValidator } from "../../../../packages/types/src/domains/iot/IotTelemetryMetric";

export class IotTelemetryMetricService {
  private repository = new Map<string, IotTelemetryMetricData>();

  public create(data: Omit<IotTelemetryMetricData, "id" | "createdAt" | "updatedAt">): IotTelemetryMetricData {
    const id = "iot_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: IotTelemetryMetricData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotTelemetryMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotTelemetryMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotTelemetryMetricData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): IotTelemetryMetricData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<IotTelemetryMetricData>): IotTelemetryMetricData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotTelemetryMetricData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
