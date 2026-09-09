import { IotFirmwareVersionData, IotFirmwareVersionValidator } from "../../../../packages/types/src/domains/iot/IotFirmwareVersion";

export class IotFirmwareVersionService {
  private repository = new Map<string, IotFirmwareVersionData>();

  public create(data: Omit<IotFirmwareVersionData, "id" | "createdAt" | "updatedAt">): IotFirmwareVersionData {
    const id = "iot_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: IotFirmwareVersionData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotFirmwareVersionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotFirmwareVersion: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotFirmwareVersionData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): IotFirmwareVersionData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<IotFirmwareVersionData>): IotFirmwareVersionData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotFirmwareVersionData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
