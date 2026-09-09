import { HrOkrGoalData, HrOkrGoalValidator } from "../../../../packages/types/src/domains/hr/HrOkrGoal";

export class HrOkrGoalService {
  private repository = new Map<string, HrOkrGoalData>();

  public create(data: Omit<HrOkrGoalData, "id" | "createdAt" | "updatedAt">): HrOkrGoalData {
    const id = "hr_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: HrOkrGoalData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrOkrGoalValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrOkrGoal: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrOkrGoalData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): HrOkrGoalData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<HrOkrGoalData>): HrOkrGoalData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrOkrGoalData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
