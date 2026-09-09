import { FinanceBankingEventModel, FinanceBankingEventValidator } from "@nexora/types/domains/finance/banking/FinanceBankingEvent";

export class FinanceBankingEventService {
  private repository = new Map<string, FinanceBankingEventModel>();

  public create(data: Omit<FinanceBankingEventModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceBankingEventModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceBankingEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceBankingEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceBankingEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceBankingEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceBankingEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceBankingEventModel>): FinanceBankingEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceBankingEventModel = {
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
