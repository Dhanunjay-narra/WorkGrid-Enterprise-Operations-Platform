import { SupportAgentsAuditLogModel, SupportAgentsAuditLogValidator } from "@nexora/types/domains/support/agents/SupportAgentsAuditLog";

export class SupportAgentsAuditLogService {
  private repository = new Map<string, SupportAgentsAuditLogModel>();

  public create(data: Omit<SupportAgentsAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): SupportAgentsAuditLogModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportAgentsAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportAgentsAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportAgentsAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportAgentsAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportAgentsAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportAgentsAuditLogModel>): SupportAgentsAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportAgentsAuditLogModel = {
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
