import { BiDashboardsTransactionModel, BiDashboardsTransactionValidator } from "@nexora/types/domains/bi/dashboards/BiDashboardsTransaction";

export class BiDashboardsTransactionService {
  private repository = new Map<string, BiDashboardsTransactionModel>();

  public create(data: Omit<BiDashboardsTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): BiDashboardsTransactionModel {
    const id = "bi_d_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiDashboardsTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiDashboardsTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiDashboardsTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiDashboardsTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiDashboardsTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiDashboardsTransactionModel>): BiDashboardsTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiDashboardsTransactionModel = {
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
