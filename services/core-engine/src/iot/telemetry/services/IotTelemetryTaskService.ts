import { IotTelemetryTaskModel, IotTelemetryTaskValidator } from "@nexora/types/domains/iot/telemetry/IotTelemetryTask";

export class IotTelemetryTaskService {
  private repository = new Map<string, IotTelemetryTaskModel>();

  public create(data: Omit<IotTelemetryTaskModel, "id" | "version" | "createdAt" | "updatedAt">): IotTelemetryTaskModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotTelemetryTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotTelemetryTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotTelemetryTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotTelemetryTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotTelemetryTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotTelemetryTaskModel>): IotTelemetryTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotTelemetryTaskModel = {
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
