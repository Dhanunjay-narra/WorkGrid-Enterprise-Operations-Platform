import { BiDashboardsScheduleModel, BiDashboardsScheduleValidator } from "@nexora/types/domains/bi/dashboards/BiDashboardsSchedule";

export class BiDashboardsScheduleService {
  private repository = new Map<string, BiDashboardsScheduleModel>();

  public create(data: Omit<BiDashboardsScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): BiDashboardsScheduleModel {
    const id = "bi_d_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiDashboardsScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiDashboardsScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiDashboardsSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiDashboardsScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiDashboardsScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiDashboardsScheduleModel>): BiDashboardsScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiDashboardsScheduleModel = {
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
