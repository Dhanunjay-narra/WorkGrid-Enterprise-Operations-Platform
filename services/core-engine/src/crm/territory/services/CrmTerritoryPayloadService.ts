import { CrmTerritoryPayloadModel, CrmTerritoryPayloadValidator } from "@nexora/types/domains/crm/territory/CrmTerritoryPayload";

export class CrmTerritoryPayloadService {
  private repository = new Map<string, CrmTerritoryPayloadModel>();

  public create(data: Omit<CrmTerritoryPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): CrmTerritoryPayloadModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmTerritoryPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmTerritoryPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmTerritoryPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmTerritoryPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmTerritoryPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmTerritoryPayloadModel>): CrmTerritoryPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmTerritoryPayloadModel = {
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
