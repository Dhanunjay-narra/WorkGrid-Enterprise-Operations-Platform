import { HrEmployeesNodeModel, HrEmployeesNodeValidator } from "@nexora/types/domains/hr/employees/HrEmployeesNode";

export class HrEmployeesNodeService {
  private repository = new Map<string, HrEmployeesNodeModel>();

  public create(data: Omit<HrEmployeesNodeModel, "id" | "version" | "createdAt" | "updatedAt">): HrEmployeesNodeModel {
    const id = "hr_e_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrEmployeesNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrEmployeesNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrEmployeesNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrEmployeesNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrEmployeesNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrEmployeesNodeModel>): HrEmployeesNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrEmployeesNodeModel = {
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
