import { IntSyncMetricModel, IntSyncMetricValidator } from "@nexora/types/domains/int/sync/IntSyncMetric";

export class IntSyncMetricService {
  private repository = new Map<string, IntSyncMetricModel>();

  public create(data: Omit<IntSyncMetricModel, "id" | "version" | "createdAt" | "updatedAt">): IntSyncMetricModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntSyncMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntSyncMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntSyncMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntSyncMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntSyncMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntSyncMetricModel>): IntSyncMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntSyncMetricModel = {
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
