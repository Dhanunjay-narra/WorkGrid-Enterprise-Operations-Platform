import { FinanceBankingThresholdModel, FinanceBankingThresholdValidator } from "@nexora/types/domains/finance/banking/FinanceBankingThreshold";

export class FinanceBankingThresholdService {
  private repository = new Map<string, FinanceBankingThresholdModel>();

  public create(data: Omit<FinanceBankingThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceBankingThresholdModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceBankingThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceBankingThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceBankingThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceBankingThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceBankingThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceBankingThresholdModel>): FinanceBankingThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceBankingThresholdModel = {
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
