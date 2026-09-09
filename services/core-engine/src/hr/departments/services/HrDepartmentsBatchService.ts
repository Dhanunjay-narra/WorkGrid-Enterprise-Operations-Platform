import { HrDepartmentsBatchModel, HrDepartmentsBatchValidator } from "@nexora/types/domains/hr/departments/HrDepartmentsBatch";

export class HrDepartmentsBatchService {
  private repository = new Map<string, HrDepartmentsBatchModel>();

  public create(data: Omit<HrDepartmentsBatchModel, "id" | "version" | "createdAt" | "updatedAt">): HrDepartmentsBatchModel {
    const id = "hr_d_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrDepartmentsBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrDepartmentsBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrDepartmentsBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrDepartmentsBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrDepartmentsBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrDepartmentsBatchModel>): HrDepartmentsBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrDepartmentsBatchModel = {
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
