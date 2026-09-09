import { ObsDashboardsSessionModel, ObsDashboardsSessionValidator } from "@nexora/types/domains/obs/dashboards/ObsDashboardsSession";

export class ObsDashboardsSessionService {
  private repository = new Map<string, ObsDashboardsSessionModel>();

  public create(data: Omit<ObsDashboardsSessionModel, "id" | "version" | "createdAt" | "updatedAt">): ObsDashboardsSessionModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsDashboardsSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsDashboardsSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsDashboardsSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsDashboardsSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsDashboardsSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsDashboardsSessionModel>): ObsDashboardsSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsDashboardsSessionModel = {
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
