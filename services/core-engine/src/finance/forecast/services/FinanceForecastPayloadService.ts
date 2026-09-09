import { FinanceForecastPayloadModel, FinanceForecastPayloadValidator } from "@nexora/types/domains/finance/forecast/FinanceForecastPayload";

export class FinanceForecastPayloadService {
  private repository = new Map<string, FinanceForecastPayloadModel>();

  public create(data: Omit<FinanceForecastPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceForecastPayloadModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceForecastPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceForecastPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceForecastPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceForecastPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceForecastPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceForecastPayloadModel>): FinanceForecastPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceForecastPayloadModel = {
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
