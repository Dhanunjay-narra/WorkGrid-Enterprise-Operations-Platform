import { IotTelemetryItemModel, IotTelemetryItemValidator } from "@nexora/types/domains/iot/telemetry/IotTelemetryItem";

export class IotTelemetryItemService {
  private repository = new Map<string, IotTelemetryItemModel>();

  public create(data: Omit<IotTelemetryItemModel, "id" | "version" | "createdAt" | "updatedAt">): IotTelemetryItemModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotTelemetryItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotTelemetryItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotTelemetryItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotTelemetryItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotTelemetryItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotTelemetryItemModel>): IotTelemetryItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotTelemetryItemModel = {
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
