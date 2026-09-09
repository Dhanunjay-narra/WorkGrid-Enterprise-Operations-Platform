import { HrDepartmentsSessionModel, HrDepartmentsSessionValidator } from "@nexora/types/domains/hr/departments/HrDepartmentsSession";

export class HrDepartmentsSessionService {
  private repository = new Map<string, HrDepartmentsSessionModel>();

  public create(data: Omit<HrDepartmentsSessionModel, "id" | "version" | "createdAt" | "updatedAt">): HrDepartmentsSessionModel {
    const id = "hr_d_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrDepartmentsSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrDepartmentsSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrDepartmentsSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrDepartmentsSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrDepartmentsSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrDepartmentsSessionModel>): HrDepartmentsSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrDepartmentsSessionModel = {
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
