import { IdentityAuditLogModel, IdentityAuditLogValidator } from "@nexora/types/domains/identity/IdentityAuditLog";

export class IdentityAuditLogService {
  private repository = new Map<string, IdentityAuditLogModel>();

  public create(data: Omit<IdentityAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): IdentityAuditLogModel {
    const id = "iden_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IdentityAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IdentityAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IdentityAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IdentityAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IdentityAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IdentityAuditLogModel>): IdentityAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IdentityAuditLogModel = {
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
