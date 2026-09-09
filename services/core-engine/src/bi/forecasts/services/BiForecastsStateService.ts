import { BiForecastsStateModel, BiForecastsStateValidator } from "@nexora/types/domains/bi/forecasts/BiForecastsState";

export class BiForecastsStateService {
  private repository = new Map<string, BiForecastsStateModel>();

  public create(data: Omit<BiForecastsStateModel, "id" | "version" | "createdAt" | "updatedAt">): BiForecastsStateModel {
    const id = "bi_f_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiForecastsStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiForecastsStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiForecastsState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiForecastsStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiForecastsStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiForecastsStateModel>): BiForecastsStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiForecastsStateModel = {
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
