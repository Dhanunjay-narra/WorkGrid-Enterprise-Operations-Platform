import { ObsAlertsRecordModel, ObsAlertsRecordValidator } from "@nexora/types/domains/obs/alerts/ObsAlertsRecord";

export class ObsAlertsRecordService {
  private repository = new Map<string, ObsAlertsRecordModel>();

  public create(data: Omit<ObsAlertsRecordModel, "id" | "version" | "createdAt" | "updatedAt">): ObsAlertsRecordModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsAlertsRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsAlertsRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsAlertsRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsAlertsRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsAlertsRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsAlertsRecordModel>): ObsAlertsRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsAlertsRecordModel = {
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
