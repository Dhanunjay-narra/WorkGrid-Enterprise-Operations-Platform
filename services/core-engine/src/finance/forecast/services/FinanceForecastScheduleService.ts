import { FinanceForecastScheduleModel, FinanceForecastScheduleValidator } from "@nexora/types/domains/finance/forecast/FinanceForecastSchedule";

export class FinanceForecastScheduleService {
  private repository = new Map<string, FinanceForecastScheduleModel>();

  public create(data: Omit<FinanceForecastScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceForecastScheduleModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceForecastScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceForecastScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceForecastSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceForecastScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceForecastScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceForecastScheduleModel>): FinanceForecastScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceForecastScheduleModel = {
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
