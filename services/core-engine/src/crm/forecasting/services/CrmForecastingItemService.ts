import { CrmForecastingItemModel, CrmForecastingItemValidator } from "@nexora/types/domains/crm/forecasting/CrmForecastingItem";

export class CrmForecastingItemService {
  private repository = new Map<string, CrmForecastingItemModel>();

  public create(data: Omit<CrmForecastingItemModel, "id" | "version" | "createdAt" | "updatedAt">): CrmForecastingItemModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmForecastingItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmForecastingItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmForecastingItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmForecastingItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmForecastingItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmForecastingItemModel>): CrmForecastingItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmForecastingItemModel = {
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
