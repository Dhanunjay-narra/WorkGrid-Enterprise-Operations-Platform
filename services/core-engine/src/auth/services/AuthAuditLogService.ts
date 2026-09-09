import { AuthAuditLogModel, AuthAuditLogValidator } from "@nexora/types/domains/auth/AuthAuditLog";

export class AuthAuditLogService {
  private repository = new Map<string, AuthAuditLogModel>();

  public create(data: Omit<AuthAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): AuthAuditLogModel {
    const id = "auth_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AuthAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AuthAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AuthAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AuthAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AuthAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AuthAuditLogModel>): AuthAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AuthAuditLogModel = {
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
