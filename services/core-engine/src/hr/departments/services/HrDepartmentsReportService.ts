import { HrDepartmentsReportModel, HrDepartmentsReportValidator } from "@nexora/types/domains/hr/departments/HrDepartmentsReport";

export class HrDepartmentsReportService {
  private repository = new Map<string, HrDepartmentsReportModel>();

  public create(data: Omit<HrDepartmentsReportModel, "id" | "version" | "createdAt" | "updatedAt">): HrDepartmentsReportModel {
    const id = "hr_d_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrDepartmentsReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrDepartmentsReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrDepartmentsReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrDepartmentsReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrDepartmentsReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrDepartmentsReportModel>): HrDepartmentsReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrDepartmentsReportModel = {
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
