import { BiForecastsScheduleModel, BiForecastsScheduleValidator } from "@nexora/types/domains/bi/forecasts/BiForecastsSchedule";

export class BiForecastsScheduleService {
  private repository = new Map<string, BiForecastsScheduleModel>();

  public create(data: Omit<BiForecastsScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): BiForecastsScheduleModel {
    const id = "bi_f_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiForecastsScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiForecastsScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiForecastsSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiForecastsScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiForecastsScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiForecastsScheduleModel>): BiForecastsScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiForecastsScheduleModel = {
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
