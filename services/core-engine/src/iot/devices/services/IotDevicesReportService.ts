import { IotDevicesReportModel, IotDevicesReportValidator } from "@nexora/types/domains/iot/devices/IotDevicesReport";

export class IotDevicesReportService {
  private repository = new Map<string, IotDevicesReportModel>();

  public create(data: Omit<IotDevicesReportModel, "id" | "version" | "createdAt" | "updatedAt">): IotDevicesReportModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotDevicesReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotDevicesReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotDevicesReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotDevicesReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotDevicesReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotDevicesReportModel>): IotDevicesReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotDevicesReportModel = {
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
