import { BiQueriesMetricModel, BiQueriesMetricValidator } from "@nexora/types/domains/bi/queries/BiQueriesMetric";

export class BiQueriesMetricService {
  private repository = new Map<string, BiQueriesMetricModel>();

  public create(data: Omit<BiQueriesMetricModel, "id" | "version" | "createdAt" | "updatedAt">): BiQueriesMetricModel {
    const id = "bi_q_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiQueriesMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiQueriesMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiQueriesMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiQueriesMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiQueriesMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiQueriesMetricModel>): BiQueriesMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiQueriesMetricModel = {
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
