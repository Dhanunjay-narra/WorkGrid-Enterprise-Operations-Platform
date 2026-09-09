import { FinanceBankingMappingModel, FinanceBankingMappingValidator } from "@nexora/types/domains/finance/banking/FinanceBankingMapping";

export class FinanceBankingMappingService {
  private repository = new Map<string, FinanceBankingMappingModel>();

  public create(data: Omit<FinanceBankingMappingModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceBankingMappingModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceBankingMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceBankingMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceBankingMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceBankingMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceBankingMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceBankingMappingModel>): FinanceBankingMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceBankingMappingModel = {
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
