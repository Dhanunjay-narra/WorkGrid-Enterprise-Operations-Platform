import { ObsDashboardsQueueModel, ObsDashboardsQueueValidator } from "@nexora/types/domains/obs/dashboards/ObsDashboardsQueue";

export class ObsDashboardsQueueService {
  private repository = new Map<string, ObsDashboardsQueueModel>();

  public create(data: Omit<ObsDashboardsQueueModel, "id" | "version" | "createdAt" | "updatedAt">): ObsDashboardsQueueModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsDashboardsQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsDashboardsQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsDashboardsQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsDashboardsQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsDashboardsQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsDashboardsQueueModel>): ObsDashboardsQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsDashboardsQueueModel = {
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
