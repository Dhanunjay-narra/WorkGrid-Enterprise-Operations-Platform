import { IotDevicesScheduleModel, IotDevicesScheduleValidator } from "@nexora/types/domains/iot/devices/IotDevicesSchedule";

export class IotDevicesScheduleService {
  private repository = new Map<string, IotDevicesScheduleModel>();

  public create(data: Omit<IotDevicesScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): IotDevicesScheduleModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotDevicesScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotDevicesScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotDevicesSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotDevicesScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotDevicesScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotDevicesScheduleModel>): IotDevicesScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotDevicesScheduleModel = {
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
