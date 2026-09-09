import { SupportSurveysTransactionModel, SupportSurveysTransactionValidator } from "@nexora/types/domains/support/surveys/SupportSurveysTransaction";

export class SupportSurveysTransactionService {
  private repository = new Map<string, SupportSurveysTransactionModel>();

  public create(data: Omit<SupportSurveysTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): SupportSurveysTransactionModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportSurveysTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportSurveysTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportSurveysTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportSurveysTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportSurveysTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportSurveysTransactionModel>): SupportSurveysTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportSurveysTransactionModel = {
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
