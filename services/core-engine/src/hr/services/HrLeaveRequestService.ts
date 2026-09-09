import { HrLeaveRequestData, HrLeaveRequestValidator } from "../../../../packages/types/src/domains/hr/HrLeaveRequest";

export class HrLeaveRequestService {
  private repository = new Map<string, HrLeaveRequestData>();

  public create(data: Omit<HrLeaveRequestData, "id" | "createdAt" | "updatedAt">): HrLeaveRequestData {
    const id = "hr_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: HrLeaveRequestData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrLeaveRequestValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrLeaveRequest: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrLeaveRequestData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): HrLeaveRequestData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<HrLeaveRequestData>): HrLeaveRequestData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrLeaveRequestData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
