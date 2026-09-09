import { CrmLeadsTransactionModel, CrmLeadsTransactionValidator } from "@nexora/types/domains/crm/leads/CrmLeadsTransaction";

export class CrmLeadsTransactionService {
  private repository = new Map<string, CrmLeadsTransactionModel>();

  public create(data: Omit<CrmLeadsTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): CrmLeadsTransactionModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmLeadsTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmLeadsTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmLeadsTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmLeadsTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmLeadsTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmLeadsTransactionModel>): CrmLeadsTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmLeadsTransactionModel = {
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
