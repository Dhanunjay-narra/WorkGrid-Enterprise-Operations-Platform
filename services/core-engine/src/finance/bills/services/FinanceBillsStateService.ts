import { FinanceBillsStateModel, FinanceBillsStateValidator } from "@nexora/types/domains/finance/bills/FinanceBillsState";

export class FinanceBillsStateService {
  private repository = new Map<string, FinanceBillsStateModel>();

  public create(data: Omit<FinanceBillsStateModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceBillsStateModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceBillsStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceBillsStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceBillsState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceBillsStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceBillsStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceBillsStateModel>): FinanceBillsStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceBillsStateModel = {
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
