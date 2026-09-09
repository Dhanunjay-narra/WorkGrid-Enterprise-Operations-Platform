import { BiKpisMetricModel, BiKpisMetricValidator } from "@nexora/types/domains/bi/kpis/BiKpisMetric";

export class BiKpisMetricService {
  private repository = new Map<string, BiKpisMetricModel>();

  public create(data: Omit<BiKpisMetricModel, "id" | "version" | "createdAt" | "updatedAt">): BiKpisMetricModel {
    const id = "bi_k_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiKpisMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiKpisMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiKpisMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiKpisMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiKpisMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiKpisMetricModel>): BiKpisMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiKpisMetricModel = {
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
