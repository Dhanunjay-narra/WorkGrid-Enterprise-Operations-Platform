import { HrLeavePolicyData, HrLeavePolicyValidator } from "../../../../packages/types/src/domains/hr/HrLeavePolicy";

export class HrLeavePolicyService {
  private repository = new Map<string, HrLeavePolicyData>();

  public create(data: Omit<HrLeavePolicyData, "id" | "createdAt" | "updatedAt">): HrLeavePolicyData {
    const id = "hr_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: HrLeavePolicyData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrLeavePolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrLeavePolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrLeavePolicyData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): HrLeavePolicyData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<HrLeavePolicyData>): HrLeavePolicyData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrLeavePolicyData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
