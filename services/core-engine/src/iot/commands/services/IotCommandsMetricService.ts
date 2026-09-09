import { IotCommandsMetricModel, IotCommandsMetricValidator } from "@nexora/types/domains/iot/commands/IotCommandsMetric";

export class IotCommandsMetricService {
  private repository = new Map<string, IotCommandsMetricModel>();

  public create(data: Omit<IotCommandsMetricModel, "id" | "version" | "createdAt" | "updatedAt">): IotCommandsMetricModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotCommandsMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotCommandsMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotCommandsMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotCommandsMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotCommandsMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotCommandsMetricModel>): IotCommandsMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotCommandsMetricModel = {
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
