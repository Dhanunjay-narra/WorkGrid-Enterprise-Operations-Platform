import { AuditAuditLogModel, AuditAuditLogValidator } from "@nexora/types/domains/audit/AuditAuditLog";

export class AuditAuditLogService {
  private repository = new Map<string, AuditAuditLogModel>();

  public create(data: Omit<AuditAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): AuditAuditLogModel {
    const id = "audi_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AuditAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AuditAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AuditAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AuditAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AuditAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AuditAuditLogModel>): AuditAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AuditAuditLogModel = {
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
