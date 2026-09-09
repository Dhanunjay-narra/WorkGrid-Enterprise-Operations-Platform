import { BiAnomaliesMetricModel, BiAnomaliesMetricValidator } from "@nexora/types/domains/bi/anomalies/BiAnomaliesMetric";

export class BiAnomaliesMetricService {
  private repository = new Map<string, BiAnomaliesMetricModel>();

  public create(data: Omit<BiAnomaliesMetricModel, "id" | "version" | "createdAt" | "updatedAt">): BiAnomaliesMetricModel {
    const id = "bi_a_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiAnomaliesMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiAnomaliesMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiAnomaliesMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiAnomaliesMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiAnomaliesMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiAnomaliesMetricModel>): BiAnomaliesMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiAnomaliesMetricModel = {
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
