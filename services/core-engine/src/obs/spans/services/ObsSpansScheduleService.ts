import { ObsSpansScheduleModel, ObsSpansScheduleValidator } from "@nexora/types/domains/obs/spans/ObsSpansSchedule";

export class ObsSpansScheduleService {
  private repository = new Map<string, ObsSpansScheduleModel>();

  public create(data: Omit<ObsSpansScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): ObsSpansScheduleModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsSpansScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsSpansScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsSpansSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsSpansScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsSpansScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsSpansScheduleModel>): ObsSpansScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsSpansScheduleModel = {
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
