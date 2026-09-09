import { HrDepartmentsProfileModel, HrDepartmentsProfileValidator } from "@nexora/types/domains/hr/departments/HrDepartmentsProfile";

export class HrDepartmentsProfileService {
  private repository = new Map<string, HrDepartmentsProfileModel>();

  public create(data: Omit<HrDepartmentsProfileModel, "id" | "version" | "createdAt" | "updatedAt">): HrDepartmentsProfileModel {
    const id = "hr_d_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrDepartmentsProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrDepartmentsProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrDepartmentsProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrDepartmentsProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrDepartmentsProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrDepartmentsProfileModel>): HrDepartmentsProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrDepartmentsProfileModel = {
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
