import { FinanceBillsAuditLogModel, FinanceBillsAuditLogValidator } from "@nexora/types/domains/finance/bills/FinanceBillsAuditLog";

export class FinanceBillsAuditLogService {
  private repository = new Map<string, FinanceBillsAuditLogModel>();

  public create(data: Omit<FinanceBillsAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceBillsAuditLogModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceBillsAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceBillsAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceBillsAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceBillsAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceBillsAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceBillsAuditLogModel>): FinanceBillsAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceBillsAuditLogModel = {
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
