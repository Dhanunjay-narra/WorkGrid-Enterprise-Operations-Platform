import { CrmTerritoryBatchModel, CrmTerritoryBatchValidator } from "@nexora/types/domains/crm/territory/CrmTerritoryBatch";

export class CrmTerritoryBatchService {
  private repository = new Map<string, CrmTerritoryBatchModel>();

  public create(data: Omit<CrmTerritoryBatchModel, "id" | "version" | "createdAt" | "updatedAt">): CrmTerritoryBatchModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmTerritoryBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmTerritoryBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmTerritoryBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmTerritoryBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmTerritoryBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmTerritoryBatchModel>): CrmTerritoryBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmTerritoryBatchModel = {
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
