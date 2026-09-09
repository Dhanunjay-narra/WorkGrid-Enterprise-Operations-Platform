import { CrmHealthAuditLogModel, CrmHealthAuditLogValidator } from "@nexora/types/domains/crm/health/CrmHealthAuditLog";

export class CrmHealthAuditLogService {
  private repository = new Map<string, CrmHealthAuditLogModel>();

  public create(data: Omit<CrmHealthAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): CrmHealthAuditLogModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmHealthAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmHealthAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmHealthAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmHealthAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmHealthAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmHealthAuditLogModel>): CrmHealthAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmHealthAuditLogModel = {
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
