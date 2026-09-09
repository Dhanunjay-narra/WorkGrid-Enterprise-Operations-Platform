import { CrmHealthMetricModel, CrmHealthMetricValidator } from "@nexora/types/domains/crm/health/CrmHealthMetric";

export class CrmHealthMetricService {
  private repository = new Map<string, CrmHealthMetricModel>();

  public create(data: Omit<CrmHealthMetricModel, "id" | "version" | "createdAt" | "updatedAt">): CrmHealthMetricModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmHealthMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmHealthMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmHealthMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmHealthMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmHealthMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmHealthMetricModel>): CrmHealthMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmHealthMetricModel = {
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
