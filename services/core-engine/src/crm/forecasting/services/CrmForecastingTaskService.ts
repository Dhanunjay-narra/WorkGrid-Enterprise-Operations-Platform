import { CrmForecastingTaskModel, CrmForecastingTaskValidator } from "@nexora/types/domains/crm/forecasting/CrmForecastingTask";

export class CrmForecastingTaskService {
  private repository = new Map<string, CrmForecastingTaskModel>();

  public create(data: Omit<CrmForecastingTaskModel, "id" | "version" | "createdAt" | "updatedAt">): CrmForecastingTaskModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmForecastingTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmForecastingTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmForecastingTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmForecastingTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmForecastingTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmForecastingTaskModel>): CrmForecastingTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmForecastingTaskModel = {
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
