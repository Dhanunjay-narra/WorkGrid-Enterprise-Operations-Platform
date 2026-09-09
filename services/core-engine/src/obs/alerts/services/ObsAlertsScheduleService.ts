import { ObsAlertsScheduleModel, ObsAlertsScheduleValidator } from "@nexora/types/domains/obs/alerts/ObsAlertsSchedule";

export class ObsAlertsScheduleService {
  private repository = new Map<string, ObsAlertsScheduleModel>();

  public create(data: Omit<ObsAlertsScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): ObsAlertsScheduleModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsAlertsScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsAlertsScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsAlertsSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsAlertsScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsAlertsScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsAlertsScheduleModel>): ObsAlertsScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsAlertsScheduleModel = {
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
