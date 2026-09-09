import { SupportAgentsTransactionModel, SupportAgentsTransactionValidator } from "@nexora/types/domains/support/agents/SupportAgentsTransaction";

export class SupportAgentsTransactionService {
  private repository = new Map<string, SupportAgentsTransactionModel>();

  public create(data: Omit<SupportAgentsTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): SupportAgentsTransactionModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportAgentsTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportAgentsTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportAgentsTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportAgentsTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportAgentsTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportAgentsTransactionModel>): SupportAgentsTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportAgentsTransactionModel = {
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
