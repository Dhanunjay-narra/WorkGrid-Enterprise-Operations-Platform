import { IotTelemetryMappingModel, IotTelemetryMappingValidator } from "@nexora/types/domains/iot/telemetry/IotTelemetryMapping";

export class IotTelemetryMappingService {
  private repository = new Map<string, IotTelemetryMappingModel>();

  public create(data: Omit<IotTelemetryMappingModel, "id" | "version" | "createdAt" | "updatedAt">): IotTelemetryMappingModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotTelemetryMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotTelemetryMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotTelemetryMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotTelemetryMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotTelemetryMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotTelemetryMappingModel>): IotTelemetryMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotTelemetryMappingModel = {
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
