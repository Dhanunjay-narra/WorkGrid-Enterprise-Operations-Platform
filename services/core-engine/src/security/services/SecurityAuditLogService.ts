import { SecurityAuditLogModel, SecurityAuditLogValidator } from "@nexora/types/domains/security/SecurityAuditLog";

export class SecurityAuditLogService {
  private repository = new Map<string, SecurityAuditLogModel>();

  public create(data: Omit<SecurityAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): SecurityAuditLogModel {
    const id = "secu_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SecurityAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SecurityAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SecurityAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SecurityAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SecurityAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SecurityAuditLogModel>): SecurityAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SecurityAuditLogModel = {
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
