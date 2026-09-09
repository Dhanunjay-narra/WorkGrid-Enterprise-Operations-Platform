import { BiForecastsItemModel, BiForecastsItemValidator } from "@nexora/types/domains/bi/forecasts/BiForecastsItem";

export class BiForecastsItemService {
  private repository = new Map<string, BiForecastsItemModel>();

  public create(data: Omit<BiForecastsItemModel, "id" | "version" | "createdAt" | "updatedAt">): BiForecastsItemModel {
    const id = "bi_f_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiForecastsItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiForecastsItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiForecastsItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiForecastsItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiForecastsItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiForecastsItemModel>): BiForecastsItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiForecastsItemModel = {
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
