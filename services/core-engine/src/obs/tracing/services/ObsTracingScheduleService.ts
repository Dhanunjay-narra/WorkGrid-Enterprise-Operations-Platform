import { ObsTracingScheduleModel, ObsTracingScheduleValidator } from "@nexora/types/domains/obs/tracing/ObsTracingSchedule";

export class ObsTracingScheduleService {
  private repository = new Map<string, ObsTracingScheduleModel>();

  public create(data: Omit<ObsTracingScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): ObsTracingScheduleModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsTracingScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsTracingScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsTracingSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsTracingScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsTracingScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsTracingScheduleModel>): ObsTracingScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsTracingScheduleModel = {
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
