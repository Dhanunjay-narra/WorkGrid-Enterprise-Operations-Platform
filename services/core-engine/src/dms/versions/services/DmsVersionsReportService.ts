import { DmsVersionsReportModel, DmsVersionsReportValidator } from "@nexora/types/domains/dms/versions/DmsVersionsReport";

export class DmsVersionsReportService {
  private repository = new Map<string, DmsVersionsReportModel>();

  public create(data: Omit<DmsVersionsReportModel, "id" | "version" | "createdAt" | "updatedAt">): DmsVersionsReportModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsVersionsReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsVersionsReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsVersionsReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsVersionsReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsVersionsReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsVersionsReportModel>): DmsVersionsReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsVersionsReportModel = {
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
