import { BiDashboardsMappingModel, BiDashboardsMappingValidator } from "@nexora/types/domains/bi/dashboards/BiDashboardsMapping";

export class BiDashboardsMappingService {
  private repository = new Map<string, BiDashboardsMappingModel>();

  public create(data: Omit<BiDashboardsMappingModel, "id" | "version" | "createdAt" | "updatedAt">): BiDashboardsMappingModel {
    const id = "bi_d_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiDashboardsMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiDashboardsMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiDashboardsMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiDashboardsMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiDashboardsMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiDashboardsMappingModel>): BiDashboardsMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiDashboardsMappingModel = {
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
