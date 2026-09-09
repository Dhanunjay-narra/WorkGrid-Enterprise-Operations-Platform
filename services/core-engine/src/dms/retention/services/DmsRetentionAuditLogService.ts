import { DmsRetentionAuditLogModel, DmsRetentionAuditLogValidator } from "@nexora/types/domains/dms/retention/DmsRetentionAuditLog";

export class DmsRetentionAuditLogService {
  private repository = new Map<string, DmsRetentionAuditLogModel>();

  public create(data: Omit<DmsRetentionAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): DmsRetentionAuditLogModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsRetentionAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsRetentionAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsRetentionAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsRetentionAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsRetentionAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsRetentionAuditLogModel>): DmsRetentionAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsRetentionAuditLogModel = {
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
