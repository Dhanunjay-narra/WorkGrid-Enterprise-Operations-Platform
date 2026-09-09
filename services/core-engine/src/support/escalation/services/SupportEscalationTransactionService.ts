import { SupportEscalationTransactionModel, SupportEscalationTransactionValidator } from "@nexora/types/domains/support/escalation/SupportEscalationTransaction";

export class SupportEscalationTransactionService {
  private repository = new Map<string, SupportEscalationTransactionModel>();

  public create(data: Omit<SupportEscalationTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): SupportEscalationTransactionModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportEscalationTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportEscalationTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportEscalationTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportEscalationTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportEscalationTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportEscalationTransactionModel>): SupportEscalationTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportEscalationTransactionModel = {
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
