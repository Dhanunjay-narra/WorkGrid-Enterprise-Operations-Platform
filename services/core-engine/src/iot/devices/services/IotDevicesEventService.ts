import { IotDevicesEventModel, IotDevicesEventValidator } from "@nexora/types/domains/iot/devices/IotDevicesEvent";

export class IotDevicesEventService {
  private repository = new Map<string, IotDevicesEventModel>();

  public create(data: Omit<IotDevicesEventModel, "id" | "version" | "createdAt" | "updatedAt">): IotDevicesEventModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotDevicesEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotDevicesEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotDevicesEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotDevicesEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotDevicesEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotDevicesEventModel>): IotDevicesEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotDevicesEventModel = {
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
