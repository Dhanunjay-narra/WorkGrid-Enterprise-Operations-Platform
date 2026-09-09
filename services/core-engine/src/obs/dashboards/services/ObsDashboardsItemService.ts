import { ObsDashboardsItemModel, ObsDashboardsItemValidator } from "@nexora/types/domains/obs/dashboards/ObsDashboardsItem";

export class ObsDashboardsItemService {
  private repository = new Map<string, ObsDashboardsItemModel>();

  public create(data: Omit<ObsDashboardsItemModel, "id" | "version" | "createdAt" | "updatedAt">): ObsDashboardsItemModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsDashboardsItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsDashboardsItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsDashboardsItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsDashboardsItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsDashboardsItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsDashboardsItemModel>): ObsDashboardsItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsDashboardsItemModel = {
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
