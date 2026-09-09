import { CrmTerritorySessionModel, CrmTerritorySessionValidator } from "@nexora/types/domains/crm/territory/CrmTerritorySession";

export class CrmTerritorySessionService {
  private repository = new Map<string, CrmTerritorySessionModel>();

  public create(data: Omit<CrmTerritorySessionModel, "id" | "version" | "createdAt" | "updatedAt">): CrmTerritorySessionModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmTerritorySessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmTerritorySessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmTerritorySession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmTerritorySessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmTerritorySessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmTerritorySessionModel>): CrmTerritorySessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmTerritorySessionModel = {
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
