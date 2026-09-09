import { SupportCsatReportModel, SupportCsatReportValidator } from "@nexora/types/domains/support/csat/SupportCsatReport";

export class SupportCsatReportService {
  private repository = new Map<string, SupportCsatReportModel>();

  public create(data: Omit<SupportCsatReportModel, "id" | "version" | "createdAt" | "updatedAt">): SupportCsatReportModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportCsatReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportCsatReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportCsatReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportCsatReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportCsatReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportCsatReportModel>): SupportCsatReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportCsatReportModel = {
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
