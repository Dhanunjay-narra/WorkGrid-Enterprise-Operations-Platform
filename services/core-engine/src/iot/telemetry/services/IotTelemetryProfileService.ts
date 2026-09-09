import { IotTelemetryProfileModel, IotTelemetryProfileValidator } from "@nexora/types/domains/iot/telemetry/IotTelemetryProfile";

export class IotTelemetryProfileService {
  private repository = new Map<string, IotTelemetryProfileModel>();

  public create(data: Omit<IotTelemetryProfileModel, "id" | "version" | "createdAt" | "updatedAt">): IotTelemetryProfileModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotTelemetryProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotTelemetryProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotTelemetryProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotTelemetryProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotTelemetryProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotTelemetryProfileModel>): IotTelemetryProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotTelemetryProfileModel = {
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
