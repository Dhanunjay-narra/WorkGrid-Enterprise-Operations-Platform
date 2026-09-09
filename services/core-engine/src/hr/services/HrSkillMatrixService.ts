import { HrSkillMatrixData, HrSkillMatrixValidator } from "../../../../packages/types/src/domains/hr/HrSkillMatrix";

export class HrSkillMatrixService {
  private repository = new Map<string, HrSkillMatrixData>();

  public create(data: Omit<HrSkillMatrixData, "id" | "createdAt" | "updatedAt">): HrSkillMatrixData {
    const id = "hr_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: HrSkillMatrixData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrSkillMatrixValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrSkillMatrix: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrSkillMatrixData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): HrSkillMatrixData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<HrSkillMatrixData>): HrSkillMatrixData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrSkillMatrixData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
