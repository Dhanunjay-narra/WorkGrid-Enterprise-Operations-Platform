import { HrEmployeesQueueModel, HrEmployeesQueueValidator } from "@nexora/types/domains/hr/employees/HrEmployeesQueue";

export class HrEmployeesQueueService {
  private repository = new Map<string, HrEmployeesQueueModel>();

  public create(data: Omit<HrEmployeesQueueModel, "id" | "version" | "createdAt" | "updatedAt">): HrEmployeesQueueModel {
    const id = "hr_e_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrEmployeesQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrEmployeesQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrEmployeesQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrEmployeesQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrEmployeesQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrEmployeesQueueModel>): HrEmployeesQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrEmployeesQueueModel = {
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
