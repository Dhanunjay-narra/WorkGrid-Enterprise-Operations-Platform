import { HrPerformanceRecordModel, HrPerformanceRecordValidator } from "@nexora/types/domains/hr/performance/HrPerformanceRecord";

export class HrPerformanceRecordService {
  private repository = new Map<string, HrPerformanceRecordModel>();

  public create(data: Omit<HrPerformanceRecordModel, "id" | "version" | "createdAt" | "updatedAt">): HrPerformanceRecordModel {
    const id = "hr_p_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrPerformanceRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrPerformanceRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrPerformanceRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrPerformanceRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrPerformanceRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrPerformanceRecordModel>): HrPerformanceRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrPerformanceRecordModel = {
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
