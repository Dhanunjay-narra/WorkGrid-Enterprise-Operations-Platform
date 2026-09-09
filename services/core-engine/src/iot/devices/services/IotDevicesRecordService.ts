import { IotDevicesRecordModel, IotDevicesRecordValidator } from "@nexora/types/domains/iot/devices/IotDevicesRecord";

export class IotDevicesRecordService {
  private repository = new Map<string, IotDevicesRecordModel>();

  public create(data: Omit<IotDevicesRecordModel, "id" | "version" | "createdAt" | "updatedAt">): IotDevicesRecordModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotDevicesRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotDevicesRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotDevicesRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotDevicesRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotDevicesRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotDevicesRecordModel>): IotDevicesRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotDevicesRecordModel = {
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
