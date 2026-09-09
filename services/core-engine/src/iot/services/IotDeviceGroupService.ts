import { IotDeviceGroupData, IotDeviceGroupValidator } from "../../../../packages/types/src/domains/iot/IotDeviceGroup";

export class IotDeviceGroupService {
  private repository = new Map<string, IotDeviceGroupData>();

  public create(data: Omit<IotDeviceGroupData, "id" | "createdAt" | "updatedAt">): IotDeviceGroupData {
    const id = "iot_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: IotDeviceGroupData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotDeviceGroupValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotDeviceGroup: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotDeviceGroupData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): IotDeviceGroupData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<IotDeviceGroupData>): IotDeviceGroupData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotDeviceGroupData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
