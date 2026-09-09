import { SupportSurveysMetricModel, SupportSurveysMetricValidator } from "@nexora/types/domains/support/surveys/SupportSurveysMetric";

export class SupportSurveysMetricService {
  private repository = new Map<string, SupportSurveysMetricModel>();

  public create(data: Omit<SupportSurveysMetricModel, "id" | "version" | "createdAt" | "updatedAt">): SupportSurveysMetricModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportSurveysMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportSurveysMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportSurveysMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportSurveysMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportSurveysMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportSurveysMetricModel>): SupportSurveysMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportSurveysMetricModel = {
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
