import { AiAgentsAuditLogModel, AiAgentsAuditLogValidator } from "@nexora/types/domains/ai/agents/AiAgentsAuditLog";

export class AiAgentsAuditLogService {
  private repository = new Map<string, AiAgentsAuditLogModel>();

  public create(data: Omit<AiAgentsAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): AiAgentsAuditLogModel {
    const id = "ai_a_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiAgentsAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiAgentsAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiAgentsAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiAgentsAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiAgentsAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiAgentsAuditLogModel>): AiAgentsAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiAgentsAuditLogModel = {
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
