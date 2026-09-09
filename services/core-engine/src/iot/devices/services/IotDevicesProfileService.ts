import { IotDevicesProfileModel, IotDevicesProfileValidator } from "@nexora/types/domains/iot/devices/IotDevicesProfile";

export class IotDevicesProfileService {
  private repository = new Map<string, IotDevicesProfileModel>();

  public create(data: Omit<IotDevicesProfileModel, "id" | "version" | "createdAt" | "updatedAt">): IotDevicesProfileModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotDevicesProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotDevicesProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotDevicesProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotDevicesProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotDevicesProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotDevicesProfileModel>): IotDevicesProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotDevicesProfileModel = {
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
