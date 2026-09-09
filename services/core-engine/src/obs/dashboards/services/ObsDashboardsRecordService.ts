import { ObsDashboardsRecordModel, ObsDashboardsRecordValidator } from "@nexora/types/domains/obs/dashboards/ObsDashboardsRecord";

export class ObsDashboardsRecordService {
  private repository = new Map<string, ObsDashboardsRecordModel>();

  public create(data: Omit<ObsDashboardsRecordModel, "id" | "version" | "createdAt" | "updatedAt">): ObsDashboardsRecordModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsDashboardsRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsDashboardsRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsDashboardsRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsDashboardsRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsDashboardsRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsDashboardsRecordModel>): ObsDashboardsRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsDashboardsRecordModel = {
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
