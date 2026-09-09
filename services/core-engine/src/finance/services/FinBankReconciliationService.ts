import { FinBankReconciliationData, FinBankReconciliationValidator } from "../../../../packages/types/src/domains/finance/FinBankReconciliation";

export class FinBankReconciliationService {
  private repository = new Map<string, FinBankReconciliationData>();

  public create(data: Omit<FinBankReconciliationData, "id" | "createdAt" | "updatedAt">): FinBankReconciliationData {
    const id = "fin_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: FinBankReconciliationData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinBankReconciliationValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinBankReconciliation: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinBankReconciliationData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): FinBankReconciliationData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<FinBankReconciliationData>): FinBankReconciliationData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinBankReconciliationData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
