import { ObsDashboardsEntryModel, ObsDashboardsEntryValidator } from "@nexora/types/domains/obs/dashboards/ObsDashboardsEntry";

export class ObsDashboardsEntryService {
  private repository = new Map<string, ObsDashboardsEntryModel>();

  public create(data: Omit<ObsDashboardsEntryModel, "id" | "version" | "createdAt" | "updatedAt">): ObsDashboardsEntryModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsDashboardsEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsDashboardsEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsDashboardsEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsDashboardsEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsDashboardsEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsDashboardsEntryModel>): ObsDashboardsEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsDashboardsEntryModel = {
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
