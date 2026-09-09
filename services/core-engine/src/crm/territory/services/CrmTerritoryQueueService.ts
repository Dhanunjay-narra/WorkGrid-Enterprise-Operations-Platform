import { CrmTerritoryQueueModel, CrmTerritoryQueueValidator } from "@nexora/types/domains/crm/territory/CrmTerritoryQueue";

export class CrmTerritoryQueueService {
  private repository = new Map<string, CrmTerritoryQueueModel>();

  public create(data: Omit<CrmTerritoryQueueModel, "id" | "version" | "createdAt" | "updatedAt">): CrmTerritoryQueueModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmTerritoryQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmTerritoryQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmTerritoryQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmTerritoryQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmTerritoryQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmTerritoryQueueModel>): CrmTerritoryQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmTerritoryQueueModel = {
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
