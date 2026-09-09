import { FinanceTreasurySnapshotModel, FinanceTreasurySnapshotValidator } from "@nexora/types/domains/finance/treasury/FinanceTreasurySnapshot";

export class FinanceTreasurySnapshotService {
  private repository = new Map<string, FinanceTreasurySnapshotModel>();

  public create(data: Omit<FinanceTreasurySnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceTreasurySnapshotModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceTreasurySnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceTreasurySnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceTreasurySnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceTreasurySnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceTreasurySnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceTreasurySnapshotModel>): FinanceTreasurySnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceTreasurySnapshotModel = {
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
