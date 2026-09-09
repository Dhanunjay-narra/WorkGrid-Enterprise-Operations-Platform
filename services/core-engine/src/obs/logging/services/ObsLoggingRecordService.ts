import { ObsLoggingRecordModel, ObsLoggingRecordValidator } from "@nexora/types/domains/obs/logging/ObsLoggingRecord";

export class ObsLoggingRecordService {
  private repository = new Map<string, ObsLoggingRecordModel>();

  public create(data: Omit<ObsLoggingRecordModel, "id" | "version" | "createdAt" | "updatedAt">): ObsLoggingRecordModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsLoggingRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsLoggingRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsLoggingRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsLoggingRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsLoggingRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsLoggingRecordModel>): ObsLoggingRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsLoggingRecordModel = {
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
