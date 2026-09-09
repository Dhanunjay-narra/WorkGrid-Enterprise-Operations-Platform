import { IotTelemetryEventModel, IotTelemetryEventValidator } from "@nexora/types/domains/iot/telemetry/IotTelemetryEvent";

export class IotTelemetryEventService {
  private repository = new Map<string, IotTelemetryEventModel>();

  public create(data: Omit<IotTelemetryEventModel, "id" | "version" | "createdAt" | "updatedAt">): IotTelemetryEventModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotTelemetryEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotTelemetryEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotTelemetryEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotTelemetryEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotTelemetryEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotTelemetryEventModel>): IotTelemetryEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotTelemetryEventModel = {
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
