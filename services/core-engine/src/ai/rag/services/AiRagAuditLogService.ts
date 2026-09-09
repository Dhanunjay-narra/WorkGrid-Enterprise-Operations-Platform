import { AiRagAuditLogModel, AiRagAuditLogValidator } from "@nexora/types/domains/ai/rag/AiRagAuditLog";

export class AiRagAuditLogService {
  private repository = new Map<string, AiRagAuditLogModel>();

  public create(data: Omit<AiRagAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): AiRagAuditLogModel {
    const id = "ai_r_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiRagAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiRagAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiRagAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiRagAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiRagAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiRagAuditLogModel>): AiRagAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiRagAuditLogModel = {
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
