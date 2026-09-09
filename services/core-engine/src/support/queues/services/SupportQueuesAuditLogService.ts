import { SupportQueuesAuditLogModel, SupportQueuesAuditLogValidator } from "@nexora/types/domains/support/queues/SupportQueuesAuditLog";

export class SupportQueuesAuditLogService {
  private repository = new Map<string, SupportQueuesAuditLogModel>();

  public create(data: Omit<SupportQueuesAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): SupportQueuesAuditLogModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportQueuesAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportQueuesAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportQueuesAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportQueuesAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportQueuesAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportQueuesAuditLogModel>): SupportQueuesAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportQueuesAuditLogModel = {
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
