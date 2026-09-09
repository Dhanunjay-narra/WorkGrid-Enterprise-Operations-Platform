import { IotThresholdsReportModel, IotThresholdsReportValidator } from "@nexora/types/domains/iot/thresholds/IotThresholdsReport";

export class IotThresholdsReportService {
  private repository = new Map<string, IotThresholdsReportModel>();

  public create(data: Omit<IotThresholdsReportModel, "id" | "version" | "createdAt" | "updatedAt">): IotThresholdsReportModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotThresholdsReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotThresholdsReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotThresholdsReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotThresholdsReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotThresholdsReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotThresholdsReportModel>): IotThresholdsReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotThresholdsReportModel = {
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
