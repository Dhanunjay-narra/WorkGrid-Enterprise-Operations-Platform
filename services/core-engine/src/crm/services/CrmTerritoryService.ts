import { CrmTerritoryData, CrmTerritoryValidator } from "../../../../packages/types/src/domains/crm/CrmTerritory";

export class CrmTerritoryService {
  private repository = new Map<string, CrmTerritoryData>();

  public create(data: Omit<CrmTerritoryData, "id" | "createdAt" | "updatedAt">): CrmTerritoryData {
    const id = "crm_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: CrmTerritoryData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmTerritoryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmTerritory: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmTerritoryData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): CrmTerritoryData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<CrmTerritoryData>): CrmTerritoryData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmTerritoryData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
