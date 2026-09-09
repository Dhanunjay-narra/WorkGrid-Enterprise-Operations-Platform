import { SupportTicketsAuditLogModel, SupportTicketsAuditLogValidator } from "@nexora/types/domains/support/tickets/SupportTicketsAuditLog";

export class SupportTicketsAuditLogService {
  private repository = new Map<string, SupportTicketsAuditLogModel>();

  public create(data: Omit<SupportTicketsAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): SupportTicketsAuditLogModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportTicketsAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportTicketsAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportTicketsAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportTicketsAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportTicketsAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportTicketsAuditLogModel>): SupportTicketsAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportTicketsAuditLogModel = {
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
