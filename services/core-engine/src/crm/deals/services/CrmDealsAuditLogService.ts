import { CrmDealsAuditLogModel, CrmDealsAuditLogValidator } from "@nexora/types/domains/crm/deals/CrmDealsAuditLog";

export class CrmDealsAuditLogService {
  private repository = new Map<string, CrmDealsAuditLogModel>();

  public create(data: Omit<CrmDealsAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): CrmDealsAuditLogModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmDealsAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmDealsAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmDealsAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmDealsAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmDealsAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmDealsAuditLogModel>): CrmDealsAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmDealsAuditLogModel = {
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
