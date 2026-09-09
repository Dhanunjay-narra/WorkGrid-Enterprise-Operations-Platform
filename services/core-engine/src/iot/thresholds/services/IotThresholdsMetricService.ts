import { IotThresholdsMetricModel, IotThresholdsMetricValidator } from "@nexora/types/domains/iot/thresholds/IotThresholdsMetric";

export class IotThresholdsMetricService {
  private repository = new Map<string, IotThresholdsMetricModel>();

  public create(data: Omit<IotThresholdsMetricModel, "id" | "version" | "createdAt" | "updatedAt">): IotThresholdsMetricModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotThresholdsMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotThresholdsMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotThresholdsMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotThresholdsMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotThresholdsMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotThresholdsMetricModel>): IotThresholdsMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotThresholdsMetricModel = {
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
