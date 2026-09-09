import { FinanceTaxesStateModel, FinanceTaxesStateValidator } from "@nexora/types/domains/finance/taxes/FinanceTaxesState";

export class FinanceTaxesStateService {
  private repository = new Map<string, FinanceTaxesStateModel>();

  public create(data: Omit<FinanceTaxesStateModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceTaxesStateModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceTaxesStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceTaxesStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceTaxesState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceTaxesStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceTaxesStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceTaxesStateModel>): FinanceTaxesStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceTaxesStateModel = {
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
