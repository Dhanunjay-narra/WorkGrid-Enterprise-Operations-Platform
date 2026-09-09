import { IntSalesforceAuditLogModel, IntSalesforceAuditLogValidator } from "@nexora/types/domains/int/salesforce/IntSalesforceAuditLog";

export class IntSalesforceAuditLogService {
  private repository = new Map<string, IntSalesforceAuditLogModel>();

  public create(data: Omit<IntSalesforceAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): IntSalesforceAuditLogModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntSalesforceAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntSalesforceAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntSalesforceAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntSalesforceAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntSalesforceAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntSalesforceAuditLogModel>): IntSalesforceAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntSalesforceAuditLogModel = {
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
