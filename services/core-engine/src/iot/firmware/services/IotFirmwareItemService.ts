import { IotFirmwareItemModel, IotFirmwareItemValidator } from "@nexora/types/domains/iot/firmware/IotFirmwareItem";

export class IotFirmwareItemService {
  private repository = new Map<string, IotFirmwareItemModel>();

  public create(data: Omit<IotFirmwareItemModel, "id" | "version" | "createdAt" | "updatedAt">): IotFirmwareItemModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotFirmwareItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotFirmwareItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotFirmwareItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotFirmwareItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotFirmwareItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotFirmwareItemModel>): IotFirmwareItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotFirmwareItemModel = {
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
