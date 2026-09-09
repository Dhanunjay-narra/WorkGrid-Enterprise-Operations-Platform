import { CrmForecastingConfigModel, CrmForecastingConfigValidator } from "@nexora/types/domains/crm/forecasting/CrmForecastingConfig";

export class CrmForecastingConfigService {
  private repository = new Map<string, CrmForecastingConfigModel>();

  public create(data: Omit<CrmForecastingConfigModel, "id" | "version" | "createdAt" | "updatedAt">): CrmForecastingConfigModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmForecastingConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmForecastingConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmForecastingConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmForecastingConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmForecastingConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmForecastingConfigModel>): CrmForecastingConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmForecastingConfigModel = {
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
