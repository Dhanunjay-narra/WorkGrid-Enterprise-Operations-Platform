import { CrmHealthTransactionModel, CrmHealthTransactionValidator } from "@nexora/types/domains/crm/health/CrmHealthTransaction";

export class CrmHealthTransactionService {
  private repository = new Map<string, CrmHealthTransactionModel>();

  public create(data: Omit<CrmHealthTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): CrmHealthTransactionModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmHealthTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmHealthTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmHealthTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmHealthTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmHealthTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmHealthTransactionModel>): CrmHealthTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmHealthTransactionModel = {
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
