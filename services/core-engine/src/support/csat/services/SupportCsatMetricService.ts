import { SupportCsatMetricModel, SupportCsatMetricValidator } from "@nexora/types/domains/support/csat/SupportCsatMetric";

export class SupportCsatMetricService {
  private repository = new Map<string, SupportCsatMetricModel>();

  public create(data: Omit<SupportCsatMetricModel, "id" | "version" | "createdAt" | "updatedAt">): SupportCsatMetricModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportCsatMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportCsatMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportCsatMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportCsatMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportCsatMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportCsatMetricModel>): SupportCsatMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportCsatMetricModel = {
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
