import { CrmTerritoryRecordModel, CrmTerritoryRecordValidator } from "@nexora/types/domains/crm/territory/CrmTerritoryRecord";

export class CrmTerritoryRecordService {
  private repository = new Map<string, CrmTerritoryRecordModel>();

  public create(data: Omit<CrmTerritoryRecordModel, "id" | "version" | "createdAt" | "updatedAt">): CrmTerritoryRecordModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmTerritoryRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmTerritoryRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmTerritoryRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmTerritoryRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmTerritoryRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmTerritoryRecordModel>): CrmTerritoryRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmTerritoryRecordModel = {
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
