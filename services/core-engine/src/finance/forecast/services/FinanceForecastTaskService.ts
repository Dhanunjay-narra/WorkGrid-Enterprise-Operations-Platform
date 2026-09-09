import { FinanceForecastTaskModel, FinanceForecastTaskValidator } from "@nexora/types/domains/finance/forecast/FinanceForecastTask";

export class FinanceForecastTaskService {
  private repository = new Map<string, FinanceForecastTaskModel>();

  public create(data: Omit<FinanceForecastTaskModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceForecastTaskModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceForecastTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceForecastTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceForecastTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceForecastTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceForecastTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceForecastTaskModel>): FinanceForecastTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceForecastTaskModel = {
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
