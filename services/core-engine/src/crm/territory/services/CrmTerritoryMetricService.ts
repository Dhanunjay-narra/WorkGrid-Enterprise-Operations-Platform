import { CrmTerritoryMetricModel, CrmTerritoryMetricValidator } from "@nexora/types/domains/crm/territory/CrmTerritoryMetric";

export class CrmTerritoryMetricService {
  private repository = new Map<string, CrmTerritoryMetricModel>();

  public create(data: Omit<CrmTerritoryMetricModel, "id" | "version" | "createdAt" | "updatedAt">): CrmTerritoryMetricModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmTerritoryMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmTerritoryMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmTerritoryMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmTerritoryMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmTerritoryMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmTerritoryMetricModel>): CrmTerritoryMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmTerritoryMetricModel = {
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
