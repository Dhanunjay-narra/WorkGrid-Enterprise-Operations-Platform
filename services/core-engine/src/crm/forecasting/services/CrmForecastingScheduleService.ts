import { CrmForecastingScheduleModel, CrmForecastingScheduleValidator } from "@nexora/types/domains/crm/forecasting/CrmForecastingSchedule";

export class CrmForecastingScheduleService {
  private repository = new Map<string, CrmForecastingScheduleModel>();

  public create(data: Omit<CrmForecastingScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): CrmForecastingScheduleModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmForecastingScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmForecastingScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmForecastingSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmForecastingScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmForecastingScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmForecastingScheduleModel>): CrmForecastingScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmForecastingScheduleModel = {
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
