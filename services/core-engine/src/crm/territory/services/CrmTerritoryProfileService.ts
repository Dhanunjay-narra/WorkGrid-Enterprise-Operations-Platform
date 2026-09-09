import { CrmTerritoryProfileModel, CrmTerritoryProfileValidator } from "@nexora/types/domains/crm/territory/CrmTerritoryProfile";

export class CrmTerritoryProfileService {
  private repository = new Map<string, CrmTerritoryProfileModel>();

  public create(data: Omit<CrmTerritoryProfileModel, "id" | "version" | "createdAt" | "updatedAt">): CrmTerritoryProfileModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmTerritoryProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmTerritoryProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmTerritoryProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmTerritoryProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmTerritoryProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmTerritoryProfileModel>): CrmTerritoryProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmTerritoryProfileModel = {
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
