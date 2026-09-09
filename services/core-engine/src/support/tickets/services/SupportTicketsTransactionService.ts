import { SupportTicketsTransactionModel, SupportTicketsTransactionValidator } from "@nexora/types/domains/support/tickets/SupportTicketsTransaction";

export class SupportTicketsTransactionService {
  private repository = new Map<string, SupportTicketsTransactionModel>();

  public create(data: Omit<SupportTicketsTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): SupportTicketsTransactionModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportTicketsTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportTicketsTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportTicketsTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportTicketsTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportTicketsTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportTicketsTransactionModel>): SupportTicketsTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportTicketsTransactionModel = {
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
