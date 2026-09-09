import { CrmDealsMetricModel, CrmDealsMetricValidator } from "@nexora/types/domains/crm/deals/CrmDealsMetric";

export class CrmDealsMetricService {
  private repository = new Map<string, CrmDealsMetricModel>();

  public create(data: Omit<CrmDealsMetricModel, "id" | "version" | "createdAt" | "updatedAt">): CrmDealsMetricModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmDealsMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmDealsMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmDealsMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmDealsMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmDealsMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmDealsMetricModel>): CrmDealsMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmDealsMetricModel = {
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
