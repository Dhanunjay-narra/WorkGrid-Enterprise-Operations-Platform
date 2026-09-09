import { HrEmployeesReportModel, HrEmployeesReportValidator } from "@nexora/types/domains/hr/employees/HrEmployeesReport";

export class HrEmployeesReportService {
  private repository = new Map<string, HrEmployeesReportModel>();

  public create(data: Omit<HrEmployeesReportModel, "id" | "version" | "createdAt" | "updatedAt">): HrEmployeesReportModel {
    const id = "hr_e_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrEmployeesReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrEmployeesReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrEmployeesReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrEmployeesReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrEmployeesReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrEmployeesReportModel>): HrEmployeesReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrEmployeesReportModel = {
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
