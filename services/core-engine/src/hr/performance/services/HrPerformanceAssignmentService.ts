import { HrPerformanceAssignmentModel, HrPerformanceAssignmentValidator } from "@nexora/types/domains/hr/performance/HrPerformanceAssignment";

export class HrPerformanceAssignmentService {
  private repository = new Map<string, HrPerformanceAssignmentModel>();

  public create(data: Omit<HrPerformanceAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): HrPerformanceAssignmentModel {
    const id = "hr_p_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrPerformanceAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrPerformanceAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrPerformanceAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrPerformanceAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrPerformanceAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrPerformanceAssignmentModel>): HrPerformanceAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrPerformanceAssignmentModel = {
      ...existing,
      ...updates,
      version: existing.version + 1,
      updatedAt: new Date().toISOString()
    };
    this.repository.set(id, updated);
    return updated;
  }

  public remove(id: string): boolean {
    return this.repository.delete(id);
  }
}
