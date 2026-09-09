import { CrmLeadsMetricModel, CrmLeadsMetricValidator } from "@nexora/types/domains/crm/leads/CrmLeadsMetric";

export class CrmLeadsMetricService {
  private repository = new Map<string, CrmLeadsMetricModel>();

  public create(data: Omit<CrmLeadsMetricModel, "id" | "version" | "createdAt" | "updatedAt">): CrmLeadsMetricModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmLeadsMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmLeadsMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmLeadsMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmLeadsMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmLeadsMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmLeadsMetricModel>): CrmLeadsMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmLeadsMetricModel = {
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
