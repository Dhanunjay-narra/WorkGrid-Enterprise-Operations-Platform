import { IotFirmwareQueueModel, IotFirmwareQueueValidator } from "@nexora/types/domains/iot/firmware/IotFirmwareQueue";

export class IotFirmwareQueueService {
  private repository = new Map<string, IotFirmwareQueueModel>();

  public create(data: Omit<IotFirmwareQueueModel, "id" | "version" | "createdAt" | "updatedAt">): IotFirmwareQueueModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotFirmwareQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotFirmwareQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotFirmwareQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotFirmwareQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotFirmwareQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotFirmwareQueueModel>): IotFirmwareQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotFirmwareQueueModel = {
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
