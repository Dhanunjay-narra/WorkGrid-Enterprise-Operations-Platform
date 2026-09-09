import { IotLocationsReportModel, IotLocationsReportValidator } from "@nexora/types/domains/iot/locations/IotLocationsReport";

export class IotLocationsReportService {
  private repository = new Map<string, IotLocationsReportModel>();

  public create(data: Omit<IotLocationsReportModel, "id" | "version" | "createdAt" | "updatedAt">): IotLocationsReportModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotLocationsReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotLocationsReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotLocationsReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotLocationsReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotLocationsReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotLocationsReportModel>): IotLocationsReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotLocationsReportModel = {
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
