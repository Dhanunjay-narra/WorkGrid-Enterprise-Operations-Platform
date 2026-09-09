import { FinGeneralLedgerData, FinGeneralLedgerValidator } from "../../../../packages/types/src/domains/finance/FinGeneralLedger";

export class FinGeneralLedgerService {
  private repository = new Map<string, FinGeneralLedgerData>();

  public create(data: Omit<FinGeneralLedgerData, "id" | "createdAt" | "updatedAt">): FinGeneralLedgerData {
    const id = "fin_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: FinGeneralLedgerData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinGeneralLedgerValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinGeneralLedger: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinGeneralLedgerData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): FinGeneralLedgerData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<FinGeneralLedgerData>): FinGeneralLedgerData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinGeneralLedgerData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
