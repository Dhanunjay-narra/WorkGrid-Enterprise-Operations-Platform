import { IotFirmwareEventModel, IotFirmwareEventValidator } from "@nexora/types/domains/iot/firmware/IotFirmwareEvent";

export class IotFirmwareEventService {
  private repository = new Map<string, IotFirmwareEventModel>();

  public create(data: Omit<IotFirmwareEventModel, "id" | "version" | "createdAt" | "updatedAt">): IotFirmwareEventModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotFirmwareEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotFirmwareEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotFirmwareEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotFirmwareEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotFirmwareEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotFirmwareEventModel>): IotFirmwareEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotFirmwareEventModel = {
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
