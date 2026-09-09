import { ObsDashboardsTaskModel, ObsDashboardsTaskValidator } from "@nexora/types/domains/obs/dashboards/ObsDashboardsTask";

export class ObsDashboardsTaskService {
  private repository = new Map<string, ObsDashboardsTaskModel>();

  public create(data: Omit<ObsDashboardsTaskModel, "id" | "version" | "createdAt" | "updatedAt">): ObsDashboardsTaskModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsDashboardsTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsDashboardsTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsDashboardsTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsDashboardsTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsDashboardsTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsDashboardsTaskModel>): ObsDashboardsTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsDashboardsTaskModel = {
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
