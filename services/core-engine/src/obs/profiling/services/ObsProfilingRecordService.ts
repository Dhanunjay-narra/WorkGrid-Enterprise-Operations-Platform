import { ObsProfilingRecordModel, ObsProfilingRecordValidator } from "@nexora/types/domains/obs/profiling/ObsProfilingRecord";

export class ObsProfilingRecordService {
  private repository = new Map<string, ObsProfilingRecordModel>();

  public create(data: Omit<ObsProfilingRecordModel, "id" | "version" | "createdAt" | "updatedAt">): ObsProfilingRecordModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsProfilingRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsProfilingRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsProfilingRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsProfilingRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsProfilingRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsProfilingRecordModel>): ObsProfilingRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsProfilingRecordModel = {
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
