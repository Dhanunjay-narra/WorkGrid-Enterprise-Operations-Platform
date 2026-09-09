import { FinanceBankingAuditLogModel, FinanceBankingAuditLogValidator } from "@nexora/types/domains/finance/banking/FinanceBankingAuditLog";

export class FinanceBankingAuditLogService {
  private repository = new Map<string, FinanceBankingAuditLogModel>();

  public create(data: Omit<FinanceBankingAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceBankingAuditLogModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceBankingAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceBankingAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceBankingAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceBankingAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceBankingAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceBankingAuditLogModel>): FinanceBankingAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceBankingAuditLogModel = {
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
