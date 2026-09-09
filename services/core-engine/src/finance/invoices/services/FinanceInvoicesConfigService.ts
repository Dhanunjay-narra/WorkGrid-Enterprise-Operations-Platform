import { FinanceInvoicesConfigModel, FinanceInvoicesConfigValidator } from "@nexora/types/domains/finance/invoices/FinanceInvoicesConfig";

export class FinanceInvoicesConfigService {
  private repository = new Map<string, FinanceInvoicesConfigModel>();

  public create(data: Omit<FinanceInvoicesConfigModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceInvoicesConfigModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceInvoicesConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceInvoicesConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceInvoicesConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceInvoicesConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceInvoicesConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceInvoicesConfigModel>): FinanceInvoicesConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceInvoicesConfigModel = {
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
