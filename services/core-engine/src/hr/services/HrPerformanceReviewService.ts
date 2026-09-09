import { HrPerformanceReviewData, HrPerformanceReviewValidator } from "../../../../packages/types/src/domains/hr/HrPerformanceReview";

export class HrPerformanceReviewService {
  private repository = new Map<string, HrPerformanceReviewData>();

  public create(data: Omit<HrPerformanceReviewData, "id" | "createdAt" | "updatedAt">): HrPerformanceReviewData {
    const id = "hr_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: HrPerformanceReviewData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrPerformanceReviewValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrPerformanceReview: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrPerformanceReviewData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): HrPerformanceReviewData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<HrPerformanceReviewData>): HrPerformanceReviewData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrPerformanceReviewData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
