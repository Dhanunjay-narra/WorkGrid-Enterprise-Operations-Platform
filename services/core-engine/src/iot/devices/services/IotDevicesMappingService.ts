import { IotDevicesMappingModel, IotDevicesMappingValidator } from "@nexora/types/domains/iot/devices/IotDevicesMapping";

export class IotDevicesMappingService {
  private repository = new Map<string, IotDevicesMappingModel>();

  public create(data: Omit<IotDevicesMappingModel, "id" | "version" | "createdAt" | "updatedAt">): IotDevicesMappingModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotDevicesMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotDevicesMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotDevicesMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotDevicesMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotDevicesMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotDevicesMappingModel>): IotDevicesMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotDevicesMappingModel = {
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
