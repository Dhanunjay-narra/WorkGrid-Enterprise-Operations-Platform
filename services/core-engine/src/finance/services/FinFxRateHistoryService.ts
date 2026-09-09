import { FinFxRateHistoryData, FinFxRateHistoryValidator } from "../../../../packages/types/src/domains/finance/FinFxRateHistory";

export class FinFxRateHistoryService {
  private repository = new Map<string, FinFxRateHistoryData>();

  public create(data: Omit<FinFxRateHistoryData, "id" | "createdAt" | "updatedAt">): FinFxRateHistoryData {
    const id = "fin_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: FinFxRateHistoryData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinFxRateHistoryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinFxRateHistory: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinFxRateHistoryData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): FinFxRateHistoryData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<FinFxRateHistoryData>): FinFxRateHistoryData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinFxRateHistoryData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
