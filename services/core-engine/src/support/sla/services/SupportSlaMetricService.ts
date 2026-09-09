import { SupportSlaMetricModel, SupportSlaMetricValidator } from "@nexora/types/domains/support/sla/SupportSlaMetric";

export class SupportSlaMetricService {
  private repository = new Map<string, SupportSlaMetricModel>();

  public create(data: Omit<SupportSlaMetricModel, "id" | "version" | "createdAt" | "updatedAt">): SupportSlaMetricModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportSlaMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportSlaMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportSlaMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportSlaMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportSlaMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportSlaMetricModel>): SupportSlaMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportSlaMetricModel = {
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
