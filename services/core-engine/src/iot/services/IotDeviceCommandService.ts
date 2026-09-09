import { IotDeviceCommandData, IotDeviceCommandValidator } from "../../../../packages/types/src/domains/iot/IotDeviceCommand";

export class IotDeviceCommandService {
  private repository = new Map<string, IotDeviceCommandData>();

  public create(data: Omit<IotDeviceCommandData, "id" | "createdAt" | "updatedAt">): IotDeviceCommandData {
    const id = "iot_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: IotDeviceCommandData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotDeviceCommandValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotDeviceCommand: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotDeviceCommandData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): IotDeviceCommandData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<IotDeviceCommandData>): IotDeviceCommandData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotDeviceCommandData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
