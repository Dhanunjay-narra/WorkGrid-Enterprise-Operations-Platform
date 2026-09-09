import { CrmTerritoryMappingModel, CrmTerritoryMappingValidator } from "@nexora/types/domains/crm/territory/CrmTerritoryMapping";

export class CrmTerritoryMappingService {
  private repository = new Map<string, CrmTerritoryMappingModel>();

  public create(data: Omit<CrmTerritoryMappingModel, "id" | "version" | "createdAt" | "updatedAt">): CrmTerritoryMappingModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmTerritoryMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmTerritoryMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmTerritoryMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmTerritoryMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmTerritoryMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmTerritoryMappingModel>): CrmTerritoryMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmTerritoryMappingModel = {
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
