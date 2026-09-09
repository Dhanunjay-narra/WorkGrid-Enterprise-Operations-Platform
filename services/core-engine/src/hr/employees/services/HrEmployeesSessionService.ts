import { HrEmployeesSessionModel, HrEmployeesSessionValidator } from "@nexora/types/domains/hr/employees/HrEmployeesSession";

export class HrEmployeesSessionService {
  private repository = new Map<string, HrEmployeesSessionModel>();

  public create(data: Omit<HrEmployeesSessionModel, "id" | "version" | "createdAt" | "updatedAt">): HrEmployeesSessionModel {
    const id = "hr_e_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrEmployeesSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrEmployeesSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrEmployeesSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrEmployeesSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrEmployeesSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrEmployeesSessionModel>): HrEmployeesSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrEmployeesSessionModel = {
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
