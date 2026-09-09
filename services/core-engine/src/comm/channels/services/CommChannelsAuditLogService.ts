import { CommChannelsAuditLogModel, CommChannelsAuditLogValidator } from "@nexora/types/domains/comm/channels/CommChannelsAuditLog";

export class CommChannelsAuditLogService {
  private repository = new Map<string, CommChannelsAuditLogModel>();

  public create(data: Omit<CommChannelsAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): CommChannelsAuditLogModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommChannelsAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommChannelsAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommChannelsAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommChannelsAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommChannelsAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommChannelsAuditLogModel>): CommChannelsAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommChannelsAuditLogModel = {
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
