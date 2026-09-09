import { IotFirmwareTaskModel, IotFirmwareTaskValidator } from "@nexora/types/domains/iot/firmware/IotFirmwareTask";

export class IotFirmwareTaskService {
  private repository = new Map<string, IotFirmwareTaskModel>();

  public create(data: Omit<IotFirmwareTaskModel, "id" | "version" | "createdAt" | "updatedAt">): IotFirmwareTaskModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotFirmwareTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotFirmwareTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotFirmwareTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotFirmwareTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotFirmwareTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotFirmwareTaskModel>): IotFirmwareTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotFirmwareTaskModel = {
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
