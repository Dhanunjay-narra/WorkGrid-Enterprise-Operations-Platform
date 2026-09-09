import { IotDevicesStateModel, IotDevicesStateValidator } from "@nexora/types/domains/iot/devices/IotDevicesState";

export class IotDevicesStateService {
  private repository = new Map<string, IotDevicesStateModel>();

  public create(data: Omit<IotDevicesStateModel, "id" | "version" | "createdAt" | "updatedAt">): IotDevicesStateModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotDevicesStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotDevicesStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotDevicesState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotDevicesStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotDevicesStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotDevicesStateModel>): IotDevicesStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotDevicesStateModel = {
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
