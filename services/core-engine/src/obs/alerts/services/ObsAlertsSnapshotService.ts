import { ObsAlertsSnapshotModel, ObsAlertsSnapshotValidator } from "@nexora/types/domains/obs/alerts/ObsAlertsSnapshot";

export class ObsAlertsSnapshotService {
  private repository = new Map<string, ObsAlertsSnapshotModel>();

  public create(data: Omit<ObsAlertsSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): ObsAlertsSnapshotModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsAlertsSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsAlertsSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsAlertsSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsAlertsSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsAlertsSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsAlertsSnapshotModel>): ObsAlertsSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsAlertsSnapshotModel = {
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
