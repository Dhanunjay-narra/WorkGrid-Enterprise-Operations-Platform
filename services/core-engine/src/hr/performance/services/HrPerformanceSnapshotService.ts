import { HrPerformanceSnapshotModel, HrPerformanceSnapshotValidator } from "@nexora/types/domains/hr/performance/HrPerformanceSnapshot";

export class HrPerformanceSnapshotService {
  private repository = new Map<string, HrPerformanceSnapshotModel>();

  public create(data: Omit<HrPerformanceSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): HrPerformanceSnapshotModel {
    const id = "hr_p_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrPerformanceSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrPerformanceSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrPerformanceSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrPerformanceSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrPerformanceSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrPerformanceSnapshotModel>): HrPerformanceSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrPerformanceSnapshotModel = {
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
