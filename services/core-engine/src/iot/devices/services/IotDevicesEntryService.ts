import { IotDevicesEntryModel, IotDevicesEntryValidator } from "@nexora/types/domains/iot/devices/IotDevicesEntry";

export class IotDevicesEntryService {
  private repository = new Map<string, IotDevicesEntryModel>();

  public create(data: Omit<IotDevicesEntryModel, "id" | "version" | "createdAt" | "updatedAt">): IotDevicesEntryModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotDevicesEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotDevicesEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotDevicesEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotDevicesEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotDevicesEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotDevicesEntryModel>): IotDevicesEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotDevicesEntryModel = {
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
