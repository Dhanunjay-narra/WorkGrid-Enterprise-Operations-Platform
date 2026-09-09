import { HrPayrollSlipData, HrPayrollSlipValidator } from "../../../../packages/types/src/domains/hr/HrPayrollSlip";

export class HrPayrollSlipService {
  private repository = new Map<string, HrPayrollSlipData>();

  public create(data: Omit<HrPayrollSlipData, "id" | "createdAt" | "updatedAt">): HrPayrollSlipData {
    const id = "hr_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: HrPayrollSlipData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrPayrollSlipValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrPayrollSlip: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrPayrollSlipData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): HrPayrollSlipData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<HrPayrollSlipData>): HrPayrollSlipData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrPayrollSlipData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
