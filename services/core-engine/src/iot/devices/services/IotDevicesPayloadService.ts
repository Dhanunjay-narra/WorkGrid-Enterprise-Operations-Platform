import { IotDevicesPayloadModel, IotDevicesPayloadValidator } from "@nexora/types/domains/iot/devices/IotDevicesPayload";

export class IotDevicesPayloadService {
  private repository = new Map<string, IotDevicesPayloadModel>();

  public create(data: Omit<IotDevicesPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): IotDevicesPayloadModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotDevicesPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotDevicesPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotDevicesPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotDevicesPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotDevicesPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotDevicesPayloadModel>): IotDevicesPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotDevicesPayloadModel = {
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
