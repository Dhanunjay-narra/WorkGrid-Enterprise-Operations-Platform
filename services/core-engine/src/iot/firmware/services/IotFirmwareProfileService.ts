import { IotFirmwareProfileModel, IotFirmwareProfileValidator } from "@nexora/types/domains/iot/firmware/IotFirmwareProfile";

export class IotFirmwareProfileService {
  private repository = new Map<string, IotFirmwareProfileModel>();

  public create(data: Omit<IotFirmwareProfileModel, "id" | "version" | "createdAt" | "updatedAt">): IotFirmwareProfileModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotFirmwareProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotFirmwareProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotFirmwareProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotFirmwareProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotFirmwareProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotFirmwareProfileModel>): IotFirmwareProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotFirmwareProfileModel = {
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
