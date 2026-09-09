import { FinanceBankingSnapshotModel, FinanceBankingSnapshotValidator } from "@nexora/types/domains/finance/banking/FinanceBankingSnapshot";

export class FinanceBankingSnapshotService {
  private repository = new Map<string, FinanceBankingSnapshotModel>();

  public create(data: Omit<FinanceBankingSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceBankingSnapshotModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceBankingSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceBankingSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceBankingSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceBankingSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceBankingSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceBankingSnapshotModel>): FinanceBankingSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceBankingSnapshotModel = {
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
