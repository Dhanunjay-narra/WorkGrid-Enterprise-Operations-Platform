import { HrTimesheetData, HrTimesheetValidator } from "../../../../packages/types/src/domains/hr/HrTimesheet";

export class HrTimesheetService {
  private repository = new Map<string, HrTimesheetData>();

  public create(data: Omit<HrTimesheetData, "id" | "createdAt" | "updatedAt">): HrTimesheetData {
    const id = "hr_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: HrTimesheetData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrTimesheetValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrTimesheet: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrTimesheetData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): HrTimesheetData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<HrTimesheetData>): HrTimesheetData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrTimesheetData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
