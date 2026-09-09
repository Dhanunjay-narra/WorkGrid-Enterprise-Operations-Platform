import { FinanceBankingProfileModel, FinanceBankingProfileValidator } from "@nexora/types/domains/finance/banking/FinanceBankingProfile";

export class FinanceBankingProfileService {
  private repository = new Map<string, FinanceBankingProfileModel>();

  public create(data: Omit<FinanceBankingProfileModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceBankingProfileModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceBankingProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceBankingProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceBankingProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceBankingProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceBankingProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceBankingProfileModel>): FinanceBankingProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceBankingProfileModel = {
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
