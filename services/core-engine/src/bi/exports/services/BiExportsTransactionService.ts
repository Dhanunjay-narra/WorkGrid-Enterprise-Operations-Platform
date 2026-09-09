import { BiExportsTransactionModel, BiExportsTransactionValidator } from "@nexora/types/domains/bi/exports/BiExportsTransaction";

export class BiExportsTransactionService {
  private repository = new Map<string, BiExportsTransactionModel>();

  public create(data: Omit<BiExportsTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): BiExportsTransactionModel {
    const id = "bi_e_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiExportsTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiExportsTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiExportsTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiExportsTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiExportsTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiExportsTransactionModel>): BiExportsTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiExportsTransactionModel = {
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
