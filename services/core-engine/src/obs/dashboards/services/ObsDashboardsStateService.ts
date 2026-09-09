import { ObsDashboardsStateModel, ObsDashboardsStateValidator } from "@nexora/types/domains/obs/dashboards/ObsDashboardsState";

export class ObsDashboardsStateService {
  private repository = new Map<string, ObsDashboardsStateModel>();

  public create(data: Omit<ObsDashboardsStateModel, "id" | "version" | "createdAt" | "updatedAt">): ObsDashboardsStateModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsDashboardsStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsDashboardsStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsDashboardsState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsDashboardsStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsDashboardsStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsDashboardsStateModel>): ObsDashboardsStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsDashboardsStateModel = {
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
