import { HrPerformanceBatchModel, HrPerformanceBatchValidator } from "@nexora/types/domains/hr/performance/HrPerformanceBatch";

export class HrPerformanceBatchService {
  private repository = new Map<string, HrPerformanceBatchModel>();

  public create(data: Omit<HrPerformanceBatchModel, "id" | "version" | "createdAt" | "updatedAt">): HrPerformanceBatchModel {
    const id = "hr_p_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrPerformanceBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrPerformanceBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrPerformanceBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrPerformanceBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrPerformanceBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrPerformanceBatchModel>): HrPerformanceBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrPerformanceBatchModel = {
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
