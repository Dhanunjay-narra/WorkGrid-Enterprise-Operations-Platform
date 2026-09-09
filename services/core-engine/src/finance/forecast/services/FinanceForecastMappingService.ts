import { FinanceForecastMappingModel, FinanceForecastMappingValidator } from "@nexora/types/domains/finance/forecast/FinanceForecastMapping";

export class FinanceForecastMappingService {
  private repository = new Map<string, FinanceForecastMappingModel>();

  public create(data: Omit<FinanceForecastMappingModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceForecastMappingModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceForecastMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceForecastMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceForecastMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceForecastMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceForecastMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceForecastMappingModel>): FinanceForecastMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceForecastMappingModel = {
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
