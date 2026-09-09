import { CrmForecastingBatchModel, CrmForecastingBatchValidator } from "@nexora/types/domains/crm/forecasting/CrmForecastingBatch";

export class CrmForecastingBatchService {
  private repository = new Map<string, CrmForecastingBatchModel>();

  public create(data: Omit<CrmForecastingBatchModel, "id" | "version" | "createdAt" | "updatedAt">): CrmForecastingBatchModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmForecastingBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmForecastingBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmForecastingBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmForecastingBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmForecastingBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmForecastingBatchModel>): CrmForecastingBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmForecastingBatchModel = {
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
