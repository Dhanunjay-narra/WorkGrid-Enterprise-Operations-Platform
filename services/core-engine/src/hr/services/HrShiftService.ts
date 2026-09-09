import { HrShiftData, HrShiftValidator } from "../../../../packages/types/src/domains/hr/HrShift";

export class HrShiftService {
  private repository = new Map<string, HrShiftData>();

  public create(data: Omit<HrShiftData, "id" | "createdAt" | "updatedAt">): HrShiftData {
    const id = "hr_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: HrShiftData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrShiftValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrShift: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrShiftData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): HrShiftData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<HrShiftData>): HrShiftData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrShiftData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
