import { HrSalaryComponentData, HrSalaryComponentValidator } from "../../../../packages/types/src/domains/hr/HrSalaryComponent";

export class HrSalaryComponentService {
  private repository = new Map<string, HrSalaryComponentData>();

  public create(data: Omit<HrSalaryComponentData, "id" | "createdAt" | "updatedAt">): HrSalaryComponentData {
    const id = "hr_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: HrSalaryComponentData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrSalaryComponentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrSalaryComponent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrSalaryComponentData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): HrSalaryComponentData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<HrSalaryComponentData>): HrSalaryComponentData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrSalaryComponentData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
