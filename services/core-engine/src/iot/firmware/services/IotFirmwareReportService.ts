import { IotFirmwareReportModel, IotFirmwareReportValidator } from "@nexora/types/domains/iot/firmware/IotFirmwareReport";

export class IotFirmwareReportService {
  private repository = new Map<string, IotFirmwareReportModel>();

  public create(data: Omit<IotFirmwareReportModel, "id" | "version" | "createdAt" | "updatedAt">): IotFirmwareReportModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotFirmwareReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotFirmwareReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotFirmwareReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotFirmwareReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotFirmwareReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotFirmwareReportModel>): IotFirmwareReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotFirmwareReportModel = {
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
