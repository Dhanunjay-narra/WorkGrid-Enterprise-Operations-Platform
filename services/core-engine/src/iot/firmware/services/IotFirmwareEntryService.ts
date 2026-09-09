import { IotFirmwareEntryModel, IotFirmwareEntryValidator } from "@nexora/types/domains/iot/firmware/IotFirmwareEntry";

export class IotFirmwareEntryService {
  private repository = new Map<string, IotFirmwareEntryModel>();

  public create(data: Omit<IotFirmwareEntryModel, "id" | "version" | "createdAt" | "updatedAt">): IotFirmwareEntryModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotFirmwareEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotFirmwareEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotFirmwareEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotFirmwareEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotFirmwareEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotFirmwareEntryModel>): IotFirmwareEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotFirmwareEntryModel = {
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
