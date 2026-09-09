import { BiForecastsThresholdModel, BiForecastsThresholdValidator } from "@nexora/types/domains/bi/forecasts/BiForecastsThreshold";

export class BiForecastsThresholdService {
  private repository = new Map<string, BiForecastsThresholdModel>();

  public create(data: Omit<BiForecastsThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): BiForecastsThresholdModel {
    const id = "bi_f_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiForecastsThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiForecastsThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiForecastsThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiForecastsThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiForecastsThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiForecastsThresholdModel>): BiForecastsThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiForecastsThresholdModel = {
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
