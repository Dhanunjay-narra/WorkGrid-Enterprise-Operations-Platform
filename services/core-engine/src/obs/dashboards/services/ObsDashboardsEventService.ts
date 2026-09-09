import { ObsDashboardsEventModel, ObsDashboardsEventValidator } from "@nexora/types/domains/obs/dashboards/ObsDashboardsEvent";

export class ObsDashboardsEventService {
  private repository = new Map<string, ObsDashboardsEventModel>();

  public create(data: Omit<ObsDashboardsEventModel, "id" | "version" | "createdAt" | "updatedAt">): ObsDashboardsEventModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsDashboardsEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsDashboardsEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsDashboardsEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsDashboardsEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsDashboardsEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsDashboardsEventModel>): ObsDashboardsEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsDashboardsEventModel = {
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
