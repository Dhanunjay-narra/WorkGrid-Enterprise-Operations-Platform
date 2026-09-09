import { IotFirmwareThresholdModel, IotFirmwareThresholdValidator } from "@nexora/types/domains/iot/firmware/IotFirmwareThreshold";

export class IotFirmwareThresholdService {
  private repository = new Map<string, IotFirmwareThresholdModel>();

  public create(data: Omit<IotFirmwareThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): IotFirmwareThresholdModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotFirmwareThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotFirmwareThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotFirmwareThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotFirmwareThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotFirmwareThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotFirmwareThresholdModel>): IotFirmwareThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotFirmwareThresholdModel = {
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
