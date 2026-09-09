import { HrLeaveMetricModel, HrLeaveMetricValidator } from "@nexora/types/domains/hr/leave/HrLeaveMetric";

export class HrLeaveMetricService {
  private repository = new Map<string, HrLeaveMetricModel>();

  public create(data: Omit<HrLeaveMetricModel, "id" | "version" | "createdAt" | "updatedAt">): HrLeaveMetricModel {
    const id = "hr_l_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrLeaveMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrLeaveMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrLeaveMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrLeaveMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrLeaveMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrLeaveMetricModel>): HrLeaveMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrLeaveMetricModel = {
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
