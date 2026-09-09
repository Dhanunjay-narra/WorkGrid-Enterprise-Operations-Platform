import { CrmHealthReportModel, CrmHealthReportValidator } from "@nexora/types/domains/crm/health/CrmHealthReport";

export class CrmHealthReportService {
  private repository = new Map<string, CrmHealthReportModel>();

  public create(data: Omit<CrmHealthReportModel, "id" | "version" | "createdAt" | "updatedAt">): CrmHealthReportModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmHealthReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmHealthReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmHealthReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmHealthReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmHealthReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmHealthReportModel>): CrmHealthReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmHealthReportModel = {
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
