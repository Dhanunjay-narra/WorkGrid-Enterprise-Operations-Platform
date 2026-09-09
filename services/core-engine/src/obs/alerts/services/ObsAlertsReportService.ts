import { ObsAlertsReportModel, ObsAlertsReportValidator } from "@nexora/types/domains/obs/alerts/ObsAlertsReport";

export class ObsAlertsReportService {
  private repository = new Map<string, ObsAlertsReportModel>();

  public create(data: Omit<ObsAlertsReportModel, "id" | "version" | "createdAt" | "updatedAt">): ObsAlertsReportModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsAlertsReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsAlertsReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsAlertsReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsAlertsReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsAlertsReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsAlertsReportModel>): ObsAlertsReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsAlertsReportModel = {
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
