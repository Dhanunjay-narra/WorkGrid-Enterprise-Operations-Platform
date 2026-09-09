import { HrDepartmentsQueueModel, HrDepartmentsQueueValidator } from "@nexora/types/domains/hr/departments/HrDepartmentsQueue";

export class HrDepartmentsQueueService {
  private repository = new Map<string, HrDepartmentsQueueModel>();

  public create(data: Omit<HrDepartmentsQueueModel, "id" | "version" | "createdAt" | "updatedAt">): HrDepartmentsQueueModel {
    const id = "hr_d_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrDepartmentsQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrDepartmentsQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrDepartmentsQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrDepartmentsQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrDepartmentsQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrDepartmentsQueueModel>): HrDepartmentsQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrDepartmentsQueueModel = {
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
