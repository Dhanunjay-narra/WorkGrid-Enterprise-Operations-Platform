import { IotTelemetrySnapshotModel, IotTelemetrySnapshotValidator } from "@nexora/types/domains/iot/telemetry/IotTelemetrySnapshot";

export class IotTelemetrySnapshotService {
  private repository = new Map<string, IotTelemetrySnapshotModel>();

  public create(data: Omit<IotTelemetrySnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): IotTelemetrySnapshotModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotTelemetrySnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotTelemetrySnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotTelemetrySnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotTelemetrySnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotTelemetrySnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotTelemetrySnapshotModel>): IotTelemetrySnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotTelemetrySnapshotModel = {
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
