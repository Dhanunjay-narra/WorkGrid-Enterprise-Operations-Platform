import { HrTaxDeductionData, HrTaxDeductionValidator } from "../../../../packages/types/src/domains/hr/HrTaxDeduction";

export class HrTaxDeductionService {
  private repository = new Map<string, HrTaxDeductionData>();

  public create(data: Omit<HrTaxDeductionData, "id" | "createdAt" | "updatedAt">): HrTaxDeductionData {
    const id = "hr_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: HrTaxDeductionData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrTaxDeductionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrTaxDeduction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrTaxDeductionData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): HrTaxDeductionData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<HrTaxDeductionData>): HrTaxDeductionData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrTaxDeductionData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
