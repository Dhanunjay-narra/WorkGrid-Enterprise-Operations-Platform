import { TenancyReportModel, TenancyReportValidator } from "@nexora/types/domains/tenancy/TenancyReport";

export class TenancyReportService {
  private repository = new Map<string, TenancyReportModel>();

  public create(data: Omit<TenancyReportModel, "id" | "version" | "createdAt" | "updatedAt">): TenancyReportModel {
    const id = "tena_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: TenancyReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = TenancyReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for TenancyReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): TenancyReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: TenancyReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<TenancyReportModel>): TenancyReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: TenancyReportModel = {
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
