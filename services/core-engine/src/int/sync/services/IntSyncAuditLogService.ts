import { IntSyncAuditLogModel, IntSyncAuditLogValidator } from "@nexora/types/domains/int/sync/IntSyncAuditLog";

export class IntSyncAuditLogService {
  private repository = new Map<string, IntSyncAuditLogModel>();

  public create(data: Omit<IntSyncAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): IntSyncAuditLogModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntSyncAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntSyncAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntSyncAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntSyncAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntSyncAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntSyncAuditLogModel>): IntSyncAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntSyncAuditLogModel = {
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
