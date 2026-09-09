import { AbacMetricModel, AbacMetricValidator } from "@nexora/types/domains/abac/AbacMetric";

export class AbacMetricService {
  private repository = new Map<string, AbacMetricModel>();

  public create(data: Omit<AbacMetricModel, "id" | "version" | "createdAt" | "updatedAt">): AbacMetricModel {
    const id = "abac_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AbacMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AbacMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AbacMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AbacMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AbacMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AbacMetricModel>): AbacMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AbacMetricModel = {
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
