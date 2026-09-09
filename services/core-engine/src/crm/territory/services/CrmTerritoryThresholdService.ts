import { CrmTerritoryThresholdModel, CrmTerritoryThresholdValidator } from "@nexora/types/domains/crm/territory/CrmTerritoryThreshold";

export class CrmTerritoryThresholdService {
  private repository = new Map<string, CrmTerritoryThresholdModel>();

  public create(data: Omit<CrmTerritoryThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): CrmTerritoryThresholdModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmTerritoryThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmTerritoryThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmTerritoryThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmTerritoryThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmTerritoryThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmTerritoryThresholdModel>): CrmTerritoryThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmTerritoryThresholdModel = {
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
