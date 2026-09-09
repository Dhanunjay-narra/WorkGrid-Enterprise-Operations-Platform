import { IotAnomaliesReportModel, IotAnomaliesReportValidator } from "@nexora/types/domains/iot/anomalies/IotAnomaliesReport";

export class IotAnomaliesReportService {
  private repository = new Map<string, IotAnomaliesReportModel>();

  public create(data: Omit<IotAnomaliesReportModel, "id" | "version" | "createdAt" | "updatedAt">): IotAnomaliesReportModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotAnomaliesReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotAnomaliesReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotAnomaliesReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotAnomaliesReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotAnomaliesReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotAnomaliesReportModel>): IotAnomaliesReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotAnomaliesReportModel = {
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
