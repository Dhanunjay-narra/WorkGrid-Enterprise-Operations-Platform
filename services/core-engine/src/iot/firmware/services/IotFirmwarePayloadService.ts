import { IotFirmwarePayloadModel, IotFirmwarePayloadValidator } from "@nexora/types/domains/iot/firmware/IotFirmwarePayload";

export class IotFirmwarePayloadService {
  private repository = new Map<string, IotFirmwarePayloadModel>();

  public create(data: Omit<IotFirmwarePayloadModel, "id" | "version" | "createdAt" | "updatedAt">): IotFirmwarePayloadModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotFirmwarePayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotFirmwarePayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotFirmwarePayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotFirmwarePayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotFirmwarePayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotFirmwarePayloadModel>): IotFirmwarePayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotFirmwarePayloadModel = {
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
