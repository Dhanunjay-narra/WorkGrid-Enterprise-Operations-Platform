import { BiForecastsRecordModel, BiForecastsRecordValidator } from "@nexora/types/domains/bi/forecasts/BiForecastsRecord";

export class BiForecastsRecordService {
  private repository = new Map<string, BiForecastsRecordModel>();

  public create(data: Omit<BiForecastsRecordModel, "id" | "version" | "createdAt" | "updatedAt">): BiForecastsRecordModel {
    const id = "bi_f_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiForecastsRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiForecastsRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiForecastsRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiForecastsRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiForecastsRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiForecastsRecordModel>): BiForecastsRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiForecastsRecordModel = {
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
