import { FinanceTaxesQueueModel, FinanceTaxesQueueValidator } from "@nexora/types/domains/finance/taxes/FinanceTaxesQueue";

export class FinanceTaxesQueueService {
  private repository = new Map<string, FinanceTaxesQueueModel>();

  public create(data: Omit<FinanceTaxesQueueModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceTaxesQueueModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceTaxesQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceTaxesQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceTaxesQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceTaxesQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceTaxesQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceTaxesQueueModel>): FinanceTaxesQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceTaxesQueueModel = {
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
