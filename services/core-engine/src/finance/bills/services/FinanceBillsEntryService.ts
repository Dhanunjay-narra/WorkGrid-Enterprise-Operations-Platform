import { FinanceBillsEntryModel, FinanceBillsEntryValidator } from "@nexora/types/domains/finance/bills/FinanceBillsEntry";

export class FinanceBillsEntryService {
  private repository = new Map<string, FinanceBillsEntryModel>();

  public create(data: Omit<FinanceBillsEntryModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceBillsEntryModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceBillsEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceBillsEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceBillsEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceBillsEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceBillsEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceBillsEntryModel>): FinanceBillsEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceBillsEntryModel = {
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
