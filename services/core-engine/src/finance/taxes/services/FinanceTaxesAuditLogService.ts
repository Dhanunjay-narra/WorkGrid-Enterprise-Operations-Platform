import { FinanceTaxesAuditLogModel, FinanceTaxesAuditLogValidator } from "@nexora/types/domains/finance/taxes/FinanceTaxesAuditLog";

export class FinanceTaxesAuditLogService {
  private repository = new Map<string, FinanceTaxesAuditLogModel>();

  public create(data: Omit<FinanceTaxesAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceTaxesAuditLogModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceTaxesAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceTaxesAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceTaxesAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceTaxesAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceTaxesAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceTaxesAuditLogModel>): FinanceTaxesAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceTaxesAuditLogModel = {
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
