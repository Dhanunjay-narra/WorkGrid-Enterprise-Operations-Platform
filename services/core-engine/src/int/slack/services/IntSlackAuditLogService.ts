import { IntSlackAuditLogModel, IntSlackAuditLogValidator } from "@nexora/types/domains/int/slack/IntSlackAuditLog";

export class IntSlackAuditLogService {
  private repository = new Map<string, IntSlackAuditLogModel>();

  public create(data: Omit<IntSlackAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): IntSlackAuditLogModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntSlackAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntSlackAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntSlackAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntSlackAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntSlackAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntSlackAuditLogModel>): IntSlackAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntSlackAuditLogModel = {
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
