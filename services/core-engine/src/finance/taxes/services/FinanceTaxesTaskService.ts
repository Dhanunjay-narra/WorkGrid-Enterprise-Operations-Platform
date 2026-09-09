import { FinanceTaxesTaskModel, FinanceTaxesTaskValidator } from "@nexora/types/domains/finance/taxes/FinanceTaxesTask";

export class FinanceTaxesTaskService {
  private repository = new Map<string, FinanceTaxesTaskModel>();

  public create(data: Omit<FinanceTaxesTaskModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceTaxesTaskModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceTaxesTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceTaxesTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceTaxesTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceTaxesTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceTaxesTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceTaxesTaskModel>): FinanceTaxesTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceTaxesTaskModel = {
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
