import { IotTelemetryConfigModel, IotTelemetryConfigValidator } from "@nexora/types/domains/iot/telemetry/IotTelemetryConfig";

export class IotTelemetryConfigService {
  private repository = new Map<string, IotTelemetryConfigModel>();

  public create(data: Omit<IotTelemetryConfigModel, "id" | "version" | "createdAt" | "updatedAt">): IotTelemetryConfigModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotTelemetryConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotTelemetryConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotTelemetryConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotTelemetryConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotTelemetryConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotTelemetryConfigModel>): IotTelemetryConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotTelemetryConfigModel = {
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
