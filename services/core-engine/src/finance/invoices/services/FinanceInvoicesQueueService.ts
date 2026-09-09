import { FinanceInvoicesQueueModel, FinanceInvoicesQueueValidator } from "@nexora/types/domains/finance/invoices/FinanceInvoicesQueue";

export class FinanceInvoicesQueueService {
  private repository = new Map<string, FinanceInvoicesQueueModel>();

  public create(data: Omit<FinanceInvoicesQueueModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceInvoicesQueueModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceInvoicesQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceInvoicesQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceInvoicesQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceInvoicesQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceInvoicesQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceInvoicesQueueModel>): FinanceInvoicesQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceInvoicesQueueModel = {
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
