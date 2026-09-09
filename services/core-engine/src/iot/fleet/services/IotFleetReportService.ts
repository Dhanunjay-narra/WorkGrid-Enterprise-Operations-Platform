import { IotFleetReportModel, IotFleetReportValidator } from "@nexora/types/domains/iot/fleet/IotFleetReport";

export class IotFleetReportService {
  private repository = new Map<string, IotFleetReportModel>();

  public create(data: Omit<IotFleetReportModel, "id" | "version" | "createdAt" | "updatedAt">): IotFleetReportModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotFleetReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotFleetReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotFleetReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotFleetReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotFleetReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotFleetReportModel>): IotFleetReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotFleetReportModel = {
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
