import { FinanceLedgerAuditLogModel, FinanceLedgerAuditLogValidator } from "@nexora/types/domains/finance/ledger/FinanceLedgerAuditLog";

export class FinanceLedgerAuditLogService {
  private repository = new Map<string, FinanceLedgerAuditLogModel>();

  public create(data: Omit<FinanceLedgerAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceLedgerAuditLogModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceLedgerAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceLedgerAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceLedgerAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceLedgerAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceLedgerAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceLedgerAuditLogModel>): FinanceLedgerAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceLedgerAuditLogModel = {
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
