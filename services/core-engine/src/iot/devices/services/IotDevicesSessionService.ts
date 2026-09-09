import { IotDevicesSessionModel, IotDevicesSessionValidator } from "@nexora/types/domains/iot/devices/IotDevicesSession";

export class IotDevicesSessionService {
  private repository = new Map<string, IotDevicesSessionModel>();

  public create(data: Omit<IotDevicesSessionModel, "id" | "version" | "createdAt" | "updatedAt">): IotDevicesSessionModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotDevicesSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotDevicesSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotDevicesSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotDevicesSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotDevicesSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotDevicesSessionModel>): IotDevicesSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotDevicesSessionModel = {
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
