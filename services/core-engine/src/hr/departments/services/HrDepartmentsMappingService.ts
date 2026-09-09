import { HrDepartmentsMappingModel, HrDepartmentsMappingValidator } from "@nexora/types/domains/hr/departments/HrDepartmentsMapping";

export class HrDepartmentsMappingService {
  private repository = new Map<string, HrDepartmentsMappingModel>();

  public create(data: Omit<HrDepartmentsMappingModel, "id" | "version" | "createdAt" | "updatedAt">): HrDepartmentsMappingModel {
    const id = "hr_d_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrDepartmentsMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrDepartmentsMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrDepartmentsMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrDepartmentsMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrDepartmentsMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrDepartmentsMappingModel>): HrDepartmentsMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrDepartmentsMappingModel = {
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
