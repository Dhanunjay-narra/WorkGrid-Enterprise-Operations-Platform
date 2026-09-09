import { IotDeviceLocationData, IotDeviceLocationValidator } from "../../../../packages/types/src/domains/iot/IotDeviceLocation";

export class IotDeviceLocationService {
  private repository = new Map<string, IotDeviceLocationData>();

  public create(data: Omit<IotDeviceLocationData, "id" | "createdAt" | "updatedAt">): IotDeviceLocationData {
    const id = "iot_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: IotDeviceLocationData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotDeviceLocationValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotDeviceLocation: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotDeviceLocationData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): IotDeviceLocationData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<IotDeviceLocationData>): IotDeviceLocationData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotDeviceLocationData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
