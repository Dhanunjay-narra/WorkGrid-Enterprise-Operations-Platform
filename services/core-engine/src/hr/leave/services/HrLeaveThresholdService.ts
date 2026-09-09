import { HrLeaveThresholdModel, HrLeaveThresholdValidator } from "@nexora/types/domains/hr/leave/HrLeaveThreshold";

export class HrLeaveThresholdService {
  private repository = new Map<string, HrLeaveThresholdModel>();

  public create(data: Omit<HrLeaveThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): HrLeaveThresholdModel {
    const id = "hr_l_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrLeaveThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrLeaveThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrLeaveThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrLeaveThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrLeaveThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrLeaveThresholdModel>): HrLeaveThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrLeaveThresholdModel = {
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
