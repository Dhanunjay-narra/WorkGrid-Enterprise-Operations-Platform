import { FinanceForecastSessionModel, FinanceForecastSessionValidator } from "@nexora/types/domains/finance/forecast/FinanceForecastSession";

export class FinanceForecastSessionService {
  private repository = new Map<string, FinanceForecastSessionModel>();

  public create(data: Omit<FinanceForecastSessionModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceForecastSessionModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceForecastSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceForecastSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceForecastSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceForecastSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceForecastSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceForecastSessionModel>): FinanceForecastSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceForecastSessionModel = {
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
