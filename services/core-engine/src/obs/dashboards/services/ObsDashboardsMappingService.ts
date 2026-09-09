import { ObsDashboardsMappingModel, ObsDashboardsMappingValidator } from "@nexora/types/domains/obs/dashboards/ObsDashboardsMapping";

export class ObsDashboardsMappingService {
  private repository = new Map<string, ObsDashboardsMappingModel>();

  public create(data: Omit<ObsDashboardsMappingModel, "id" | "version" | "createdAt" | "updatedAt">): ObsDashboardsMappingModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsDashboardsMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsDashboardsMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsDashboardsMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsDashboardsMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsDashboardsMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsDashboardsMappingModel>): ObsDashboardsMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsDashboardsMappingModel = {
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
