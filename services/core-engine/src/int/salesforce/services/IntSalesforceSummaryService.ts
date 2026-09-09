import { IntSalesforceSummaryModel, IntSalesforceSummaryValidator } from "@nexora/types/domains/int/salesforce/IntSalesforceSummary";

export class IntSalesforceSummaryService {
  private repository = new Map<string, IntSalesforceSummaryModel>();

  public create(data: Omit<IntSalesforceSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): IntSalesforceSummaryModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntSalesforceSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntSalesforceSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntSalesforceSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntSalesforceSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntSalesforceSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntSalesforceSummaryModel>): IntSalesforceSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntSalesforceSummaryModel = {
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
