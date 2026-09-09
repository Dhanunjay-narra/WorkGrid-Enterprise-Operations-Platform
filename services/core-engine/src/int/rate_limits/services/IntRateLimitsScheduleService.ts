import { IntRateLimitsScheduleModel, IntRateLimitsScheduleValidator } from "@nexora/types/domains/int/rate_limits/IntRateLimitsSchedule";

export class IntRateLimitsScheduleService {
  private repository = new Map<string, IntRateLimitsScheduleModel>();

  public create(data: Omit<IntRateLimitsScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): IntRateLimitsScheduleModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntRateLimitsScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntRateLimitsScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntRateLimitsSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntRateLimitsScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntRateLimitsScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntRateLimitsScheduleModel>): IntRateLimitsScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntRateLimitsScheduleModel = {
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
