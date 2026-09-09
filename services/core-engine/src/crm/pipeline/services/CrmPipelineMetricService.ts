import { CrmPipelineMetricModel, CrmPipelineMetricValidator } from "@nexora/types/domains/crm/pipeline/CrmPipelineMetric";

export class CrmPipelineMetricService {
  private repository = new Map<string, CrmPipelineMetricModel>();

  public create(data: Omit<CrmPipelineMetricModel, "id" | "version" | "createdAt" | "updatedAt">): CrmPipelineMetricModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmPipelineMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmPipelineMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmPipelineMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmPipelineMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmPipelineMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmPipelineMetricModel>): CrmPipelineMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmPipelineMetricModel = {
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
