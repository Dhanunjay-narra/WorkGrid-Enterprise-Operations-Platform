import { HrDepartmentsEntryModel, HrDepartmentsEntryValidator } from "@nexora/types/domains/hr/departments/HrDepartmentsEntry";

export class HrDepartmentsEntryService {
  private repository = new Map<string, HrDepartmentsEntryModel>();

  public create(data: Omit<HrDepartmentsEntryModel, "id" | "version" | "createdAt" | "updatedAt">): HrDepartmentsEntryModel {
    const id = "hr_d_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrDepartmentsEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrDepartmentsEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrDepartmentsEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrDepartmentsEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrDepartmentsEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrDepartmentsEntryModel>): HrDepartmentsEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrDepartmentsEntryModel = {
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
