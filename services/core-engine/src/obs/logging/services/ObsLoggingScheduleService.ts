import { ObsLoggingScheduleModel, ObsLoggingScheduleValidator } from "@nexora/types/domains/obs/logging/ObsLoggingSchedule";

export class ObsLoggingScheduleService {
  private repository = new Map<string, ObsLoggingScheduleModel>();

  public create(data: Omit<ObsLoggingScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): ObsLoggingScheduleModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsLoggingScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsLoggingScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsLoggingSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsLoggingScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsLoggingScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsLoggingScheduleModel>): ObsLoggingScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsLoggingScheduleModel = {
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
