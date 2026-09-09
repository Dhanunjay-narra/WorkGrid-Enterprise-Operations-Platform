import { IotTelemetryRecordModel, IotTelemetryRecordValidator } from "@nexora/types/domains/iot/telemetry/IotTelemetryRecord";

export class IotTelemetryRecordService {
  private repository = new Map<string, IotTelemetryRecordModel>();

  public create(data: Omit<IotTelemetryRecordModel, "id" | "version" | "createdAt" | "updatedAt">): IotTelemetryRecordModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotTelemetryRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotTelemetryRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotTelemetryRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotTelemetryRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotTelemetryRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotTelemetryRecordModel>): IotTelemetryRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotTelemetryRecordModel = {
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
