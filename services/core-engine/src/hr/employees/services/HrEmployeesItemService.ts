import { HrEmployeesItemModel, HrEmployeesItemValidator } from "@nexora/types/domains/hr/employees/HrEmployeesItem";

export class HrEmployeesItemService {
  private repository = new Map<string, HrEmployeesItemModel>();

  public create(data: Omit<HrEmployeesItemModel, "id" | "version" | "createdAt" | "updatedAt">): HrEmployeesItemModel {
    const id = "hr_e_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrEmployeesItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrEmployeesItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrEmployeesItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrEmployeesItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrEmployeesItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrEmployeesItemModel>): HrEmployeesItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrEmployeesItemModel = {
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
