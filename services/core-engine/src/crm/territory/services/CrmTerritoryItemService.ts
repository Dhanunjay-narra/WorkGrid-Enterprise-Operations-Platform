import { CrmTerritoryItemModel, CrmTerritoryItemValidator } from "@nexora/types/domains/crm/territory/CrmTerritoryItem";

export class CrmTerritoryItemService {
  private repository = new Map<string, CrmTerritoryItemModel>();

  public create(data: Omit<CrmTerritoryItemModel, "id" | "version" | "createdAt" | "updatedAt">): CrmTerritoryItemModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmTerritoryItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmTerritoryItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmTerritoryItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmTerritoryItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmTerritoryItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmTerritoryItemModel>): CrmTerritoryItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmTerritoryItemModel = {
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
