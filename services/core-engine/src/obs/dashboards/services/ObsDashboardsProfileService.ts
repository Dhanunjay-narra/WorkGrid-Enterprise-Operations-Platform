import { ObsDashboardsProfileModel, ObsDashboardsProfileValidator } from "@nexora/types/domains/obs/dashboards/ObsDashboardsProfile";

export class ObsDashboardsProfileService {
  private repository = new Map<string, ObsDashboardsProfileModel>();

  public create(data: Omit<ObsDashboardsProfileModel, "id" | "version" | "createdAt" | "updatedAt">): ObsDashboardsProfileModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsDashboardsProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsDashboardsProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsDashboardsProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsDashboardsProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsDashboardsProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsDashboardsProfileModel>): ObsDashboardsProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsDashboardsProfileModel = {
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
