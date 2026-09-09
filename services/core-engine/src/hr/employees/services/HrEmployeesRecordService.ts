import { HrEmployeesRecordModel, HrEmployeesRecordValidator } from "@nexora/types/domains/hr/employees/HrEmployeesRecord";

export class HrEmployeesRecordService {
  private repository = new Map<string, HrEmployeesRecordModel>();

  public create(data: Omit<HrEmployeesRecordModel, "id" | "version" | "createdAt" | "updatedAt">): HrEmployeesRecordModel {
    const id = "hr_e_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrEmployeesRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrEmployeesRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrEmployeesRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrEmployeesRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrEmployeesRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrEmployeesRecordModel>): HrEmployeesRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrEmployeesRecordModel = {
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
