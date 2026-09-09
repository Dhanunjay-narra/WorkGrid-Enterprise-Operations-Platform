import { IotDevicesSummaryModel, IotDevicesSummaryValidator } from "@nexora/types/domains/iot/devices/IotDevicesSummary";

export class IotDevicesSummaryService {
  private repository = new Map<string, IotDevicesSummaryModel>();

  public create(data: Omit<IotDevicesSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): IotDevicesSummaryModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotDevicesSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotDevicesSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotDevicesSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotDevicesSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotDevicesSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotDevicesSummaryModel>): IotDevicesSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotDevicesSummaryModel = {
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
