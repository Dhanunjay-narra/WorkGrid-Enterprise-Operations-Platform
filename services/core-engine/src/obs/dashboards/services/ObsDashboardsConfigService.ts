import { ObsDashboardsConfigModel, ObsDashboardsConfigValidator } from "@nexora/types/domains/obs/dashboards/ObsDashboardsConfig";

export class ObsDashboardsConfigService {
  private repository = new Map<string, ObsDashboardsConfigModel>();

  public create(data: Omit<ObsDashboardsConfigModel, "id" | "version" | "createdAt" | "updatedAt">): ObsDashboardsConfigModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsDashboardsConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsDashboardsConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsDashboardsConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsDashboardsConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsDashboardsConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsDashboardsConfigModel>): ObsDashboardsConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsDashboardsConfigModel = {
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
