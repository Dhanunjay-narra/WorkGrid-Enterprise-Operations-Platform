import { SupportKnowledgeAuditLogModel, SupportKnowledgeAuditLogValidator } from "@nexora/types/domains/support/knowledge/SupportKnowledgeAuditLog";

export class SupportKnowledgeAuditLogService {
  private repository = new Map<string, SupportKnowledgeAuditLogModel>();

  public create(data: Omit<SupportKnowledgeAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): SupportKnowledgeAuditLogModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportKnowledgeAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportKnowledgeAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportKnowledgeAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportKnowledgeAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportKnowledgeAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportKnowledgeAuditLogModel>): SupportKnowledgeAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportKnowledgeAuditLogModel = {
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
