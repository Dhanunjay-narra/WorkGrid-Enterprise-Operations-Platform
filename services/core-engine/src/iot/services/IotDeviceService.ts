import { IotDeviceData, IotDeviceValidator } from "../../../../packages/types/src/domains/iot/IotDevice";

export class IotDeviceService {
  private repository = new Map<string, IotDeviceData>();

  public create(data: Omit<IotDeviceData, "id" | "createdAt" | "updatedAt">): IotDeviceData {
    const id = "iot_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: IotDeviceData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotDeviceValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotDevice: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotDeviceData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): IotDeviceData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<IotDeviceData>): IotDeviceData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotDeviceData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
