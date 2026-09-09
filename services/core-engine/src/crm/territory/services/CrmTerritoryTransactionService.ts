import { CrmTerritoryTransactionModel, CrmTerritoryTransactionValidator } from "@nexora/types/domains/crm/territory/CrmTerritoryTransaction";

export class CrmTerritoryTransactionService {
  private repository = new Map<string, CrmTerritoryTransactionModel>();

  public create(data: Omit<CrmTerritoryTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): CrmTerritoryTransactionModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmTerritoryTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmTerritoryTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmTerritoryTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmTerritoryTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmTerritoryTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmTerritoryTransactionModel>): CrmTerritoryTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmTerritoryTransactionModel = {
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
