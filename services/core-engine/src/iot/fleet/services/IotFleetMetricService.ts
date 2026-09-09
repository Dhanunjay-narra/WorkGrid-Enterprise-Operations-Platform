import { IotFleetMetricModel, IotFleetMetricValidator } from "@nexora/types/domains/iot/fleet/IotFleetMetric";

export class IotFleetMetricService {
  private repository = new Map<string, IotFleetMetricModel>();

  public create(data: Omit<IotFleetMetricModel, "id" | "version" | "createdAt" | "updatedAt">): IotFleetMetricModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotFleetMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotFleetMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotFleetMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotFleetMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotFleetMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotFleetMetricModel>): IotFleetMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotFleetMetricModel = {
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
