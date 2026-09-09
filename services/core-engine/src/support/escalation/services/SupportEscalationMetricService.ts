import { SupportEscalationMetricModel, SupportEscalationMetricValidator } from "@nexora/types/domains/support/escalation/SupportEscalationMetric";

export class SupportEscalationMetricService {
  private repository = new Map<string, SupportEscalationMetricModel>();

  public create(data: Omit<SupportEscalationMetricModel, "id" | "version" | "createdAt" | "updatedAt">): SupportEscalationMetricModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportEscalationMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportEscalationMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportEscalationMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportEscalationMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportEscalationMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportEscalationMetricModel>): SupportEscalationMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportEscalationMetricModel = {
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
