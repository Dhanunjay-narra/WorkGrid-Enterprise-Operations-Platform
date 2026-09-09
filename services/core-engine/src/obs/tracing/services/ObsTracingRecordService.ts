import { ObsTracingRecordModel, ObsTracingRecordValidator } from "@nexora/types/domains/obs/tracing/ObsTracingRecord";

export class ObsTracingRecordService {
  private repository = new Map<string, ObsTracingRecordModel>();

  public create(data: Omit<ObsTracingRecordModel, "id" | "version" | "createdAt" | "updatedAt">): ObsTracingRecordModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsTracingRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsTracingRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsTracingRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsTracingRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsTracingRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsTracingRecordModel>): ObsTracingRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsTracingRecordModel = {
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
