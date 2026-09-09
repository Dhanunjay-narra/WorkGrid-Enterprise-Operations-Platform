import { FinLedgerAccountData, FinLedgerAccountValidator } from "../../../../packages/types/src/domains/finance/FinLedgerAccount";

export class FinLedgerAccountService {
  private repository = new Map<string, FinLedgerAccountData>();

  public create(data: Omit<FinLedgerAccountData, "id" | "createdAt" | "updatedAt">): FinLedgerAccountData {
    const id = "fin_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: FinLedgerAccountData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinLedgerAccountValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinLedgerAccount: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinLedgerAccountData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): FinLedgerAccountData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<FinLedgerAccountData>): FinLedgerAccountData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinLedgerAccountData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
