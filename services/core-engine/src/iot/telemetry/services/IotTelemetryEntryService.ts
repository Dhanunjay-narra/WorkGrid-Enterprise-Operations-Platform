import { IotTelemetryEntryModel, IotTelemetryEntryValidator } from "@nexora/types/domains/iot/telemetry/IotTelemetryEntry";

export class IotTelemetryEntryService {
  private repository = new Map<string, IotTelemetryEntryModel>();

  public create(data: Omit<IotTelemetryEntryModel, "id" | "version" | "createdAt" | "updatedAt">): IotTelemetryEntryModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotTelemetryEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotTelemetryEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotTelemetryEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotTelemetryEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotTelemetryEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotTelemetryEntryModel>): IotTelemetryEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotTelemetryEntryModel = {
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
