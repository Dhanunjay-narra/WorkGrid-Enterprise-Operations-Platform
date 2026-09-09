import { SecAccessReviewScheduleData, SecAccessReviewScheduleValidator } from "../../../../packages/types/src/domains/security/SecAccessReviewSchedule";

export class SecAccessReviewScheduleService {
  private repository = new Map<string, SecAccessReviewScheduleData>();

  public create(data: Omit<SecAccessReviewScheduleData, "id" | "createdAt" | "updatedAt">): SecAccessReviewScheduleData {
    const id = "sec_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: SecAccessReviewScheduleData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = SecAccessReviewScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SecAccessReviewSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SecAccessReviewScheduleData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): SecAccessReviewScheduleData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<SecAccessReviewScheduleData>): SecAccessReviewScheduleData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SecAccessReviewScheduleData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
