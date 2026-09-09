import { IotAnomaliesMetricModel, IotAnomaliesMetricValidator } from "@nexora/types/domains/iot/anomalies/IotAnomaliesMetric";

export class IotAnomaliesMetricService {
  private repository = new Map<string, IotAnomaliesMetricModel>();

  public create(data: Omit<IotAnomaliesMetricModel, "id" | "version" | "createdAt" | "updatedAt">): IotAnomaliesMetricModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotAnomaliesMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotAnomaliesMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotAnomaliesMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotAnomaliesMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotAnomaliesMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotAnomaliesMetricModel>): IotAnomaliesMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotAnomaliesMetricModel = {
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
