import { FinanceBankingPayloadModel, FinanceBankingPayloadValidator } from "@nexora/types/domains/finance/banking/FinanceBankingPayload";

export class FinanceBankingPayloadService {
  private repository = new Map<string, FinanceBankingPayloadModel>();

  public create(data: Omit<FinanceBankingPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceBankingPayloadModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceBankingPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceBankingPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceBankingPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceBankingPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceBankingPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceBankingPayloadModel>): FinanceBankingPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceBankingPayloadModel = {
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
