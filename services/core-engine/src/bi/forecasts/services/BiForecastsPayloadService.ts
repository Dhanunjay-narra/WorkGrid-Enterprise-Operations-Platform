import { BiForecastsPayloadModel, BiForecastsPayloadValidator } from "@nexora/types/domains/bi/forecasts/BiForecastsPayload";

export class BiForecastsPayloadService {
  private repository = new Map<string, BiForecastsPayloadModel>();

  public create(data: Omit<BiForecastsPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): BiForecastsPayloadModel {
    const id = "bi_f_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiForecastsPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiForecastsPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiForecastsPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiForecastsPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiForecastsPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiForecastsPayloadModel>): BiForecastsPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiForecastsPayloadModel = {
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
