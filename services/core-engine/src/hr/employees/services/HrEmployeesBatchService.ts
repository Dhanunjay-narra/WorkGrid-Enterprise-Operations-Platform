import { HrEmployeesBatchModel, HrEmployeesBatchValidator } from "@nexora/types/domains/hr/employees/HrEmployeesBatch";

export class HrEmployeesBatchService {
  private repository = new Map<string, HrEmployeesBatchModel>();

  public create(data: Omit<HrEmployeesBatchModel, "id" | "version" | "createdAt" | "updatedAt">): HrEmployeesBatchModel {
    const id = "hr_e_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrEmployeesBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrEmployeesBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrEmployeesBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrEmployeesBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrEmployeesBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrEmployeesBatchModel>): HrEmployeesBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrEmployeesBatchModel = {
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
