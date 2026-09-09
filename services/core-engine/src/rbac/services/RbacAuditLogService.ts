import { RbacAuditLogModel, RbacAuditLogValidator } from "@nexora/types/domains/rbac/RbacAuditLog";

export class RbacAuditLogService {
  private repository = new Map<string, RbacAuditLogModel>();

  public create(data: Omit<RbacAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): RbacAuditLogModel {
    const id = "rbac_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: RbacAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = RbacAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for RbacAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): RbacAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: RbacAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<RbacAuditLogModel>): RbacAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: RbacAuditLogModel = {
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
