import { BiForecastsNodeModel, BiForecastsNodeValidator } from "@nexora/types/domains/bi/forecasts/BiForecastsNode";

export class BiForecastsNodeService {
  private repository = new Map<string, BiForecastsNodeModel>();

  public create(data: Omit<BiForecastsNodeModel, "id" | "version" | "createdAt" | "updatedAt">): BiForecastsNodeModel {
    const id = "bi_f_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiForecastsNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiForecastsNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiForecastsNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiForecastsNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiForecastsNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiForecastsNodeModel>): BiForecastsNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiForecastsNodeModel = {
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
