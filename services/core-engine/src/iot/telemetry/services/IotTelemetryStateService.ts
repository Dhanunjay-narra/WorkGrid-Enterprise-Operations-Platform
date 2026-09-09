import { IotTelemetryStateModel, IotTelemetryStateValidator } from "@nexora/types/domains/iot/telemetry/IotTelemetryState";

export class IotTelemetryStateService {
  private repository = new Map<string, IotTelemetryStateModel>();

  public create(data: Omit<IotTelemetryStateModel, "id" | "version" | "createdAt" | "updatedAt">): IotTelemetryStateModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotTelemetryStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotTelemetryStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotTelemetryState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotTelemetryStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotTelemetryStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotTelemetryStateModel>): IotTelemetryStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotTelemetryStateModel = {
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
