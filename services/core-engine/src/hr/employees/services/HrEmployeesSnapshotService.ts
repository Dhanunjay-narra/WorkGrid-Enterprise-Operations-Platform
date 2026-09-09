import { HrEmployeesSnapshotModel, HrEmployeesSnapshotValidator } from "@nexora/types/domains/hr/employees/HrEmployeesSnapshot";

export class HrEmployeesSnapshotService {
  private repository = new Map<string, HrEmployeesSnapshotModel>();

  public create(data: Omit<HrEmployeesSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): HrEmployeesSnapshotModel {
    const id = "hr_e_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrEmployeesSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrEmployeesSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrEmployeesSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrEmployeesSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrEmployeesSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrEmployeesSnapshotModel>): HrEmployeesSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrEmployeesSnapshotModel = {
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
