import { CrmForecastingQueueModel, CrmForecastingQueueValidator } from "@nexora/types/domains/crm/forecasting/CrmForecastingQueue";

export class CrmForecastingQueueService {
  private repository = new Map<string, CrmForecastingQueueModel>();

  public create(data: Omit<CrmForecastingQueueModel, "id" | "version" | "createdAt" | "updatedAt">): CrmForecastingQueueModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmForecastingQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmForecastingQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmForecastingQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmForecastingQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmForecastingQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmForecastingQueueModel>): CrmForecastingQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmForecastingQueueModel = {
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
