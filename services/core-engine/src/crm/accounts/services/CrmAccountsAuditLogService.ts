import { CrmAccountsAuditLogModel, CrmAccountsAuditLogValidator } from "@nexora/types/domains/crm/accounts/CrmAccountsAuditLog";

export class CrmAccountsAuditLogService {
  private repository = new Map<string, CrmAccountsAuditLogModel>();

  public create(data: Omit<CrmAccountsAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): CrmAccountsAuditLogModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmAccountsAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmAccountsAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmAccountsAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmAccountsAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmAccountsAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmAccountsAuditLogModel>): CrmAccountsAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmAccountsAuditLogModel = {
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
