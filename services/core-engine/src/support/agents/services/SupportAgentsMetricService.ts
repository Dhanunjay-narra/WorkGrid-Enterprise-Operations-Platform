import { SupportAgentsMetricModel, SupportAgentsMetricValidator } from "@nexora/types/domains/support/agents/SupportAgentsMetric";

export class SupportAgentsMetricService {
  private repository = new Map<string, SupportAgentsMetricModel>();

  public create(data: Omit<SupportAgentsMetricModel, "id" | "version" | "createdAt" | "updatedAt">): SupportAgentsMetricModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportAgentsMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportAgentsMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportAgentsMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportAgentsMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportAgentsMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportAgentsMetricModel>): SupportAgentsMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportAgentsMetricModel = {
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
