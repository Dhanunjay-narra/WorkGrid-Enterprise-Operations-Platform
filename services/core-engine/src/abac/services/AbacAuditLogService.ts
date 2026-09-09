import { AbacAuditLogModel, AbacAuditLogValidator } from "@nexora/types/domains/abac/AbacAuditLog";

export class AbacAuditLogService {
  private repository = new Map<string, AbacAuditLogModel>();

  public create(data: Omit<AbacAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): AbacAuditLogModel {
    const id = "abac_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AbacAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AbacAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AbacAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AbacAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AbacAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AbacAuditLogModel>): AbacAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AbacAuditLogModel = {
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
