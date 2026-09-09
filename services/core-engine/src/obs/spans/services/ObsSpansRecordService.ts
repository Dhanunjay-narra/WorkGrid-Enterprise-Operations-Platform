import { ObsSpansRecordModel, ObsSpansRecordValidator } from "@nexora/types/domains/obs/spans/ObsSpansRecord";

export class ObsSpansRecordService {
  private repository = new Map<string, ObsSpansRecordModel>();

  public create(data: Omit<ObsSpansRecordModel, "id" | "version" | "createdAt" | "updatedAt">): ObsSpansRecordModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsSpansRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsSpansRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsSpansRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsSpansRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsSpansRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsSpansRecordModel>): ObsSpansRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsSpansRecordModel = {
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
