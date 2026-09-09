import { FinanceBankingSessionModel, FinanceBankingSessionValidator } from "@nexora/types/domains/finance/banking/FinanceBankingSession";

export class FinanceBankingSessionService {
  private repository = new Map<string, FinanceBankingSessionModel>();

  public create(data: Omit<FinanceBankingSessionModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceBankingSessionModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceBankingSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceBankingSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceBankingSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceBankingSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceBankingSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceBankingSessionModel>): FinanceBankingSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceBankingSessionModel = {
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
