import { CrmTerritoryReportModel, CrmTerritoryReportValidator } from "@nexora/types/domains/crm/territory/CrmTerritoryReport";

export class CrmTerritoryReportService {
  private repository = new Map<string, CrmTerritoryReportModel>();

  public create(data: Omit<CrmTerritoryReportModel, "id" | "version" | "createdAt" | "updatedAt">): CrmTerritoryReportModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmTerritoryReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmTerritoryReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmTerritoryReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmTerritoryReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmTerritoryReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmTerritoryReportModel>): CrmTerritoryReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmTerritoryReportModel = {
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
