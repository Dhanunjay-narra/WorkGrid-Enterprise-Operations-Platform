import { ObsAlertsQueueModel, ObsAlertsQueueValidator } from "@nexora/types/domains/obs/alerts/ObsAlertsQueue";

export class ObsAlertsQueueService {
  private repository = new Map<string, ObsAlertsQueueModel>();

  public create(data: Omit<ObsAlertsQueueModel, "id" | "version" | "createdAt" | "updatedAt">): ObsAlertsQueueModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsAlertsQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsAlertsQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsAlertsQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsAlertsQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsAlertsQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsAlertsQueueModel>): ObsAlertsQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsAlertsQueueModel = {
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
