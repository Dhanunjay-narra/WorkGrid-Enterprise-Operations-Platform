import { AiPromptsAuditLogModel, AiPromptsAuditLogValidator } from "@nexora/types/domains/ai/prompts/AiPromptsAuditLog";

export class AiPromptsAuditLogService {
  private repository = new Map<string, AiPromptsAuditLogModel>();

  public create(data: Omit<AiPromptsAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): AiPromptsAuditLogModel {
    const id = "ai_p_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiPromptsAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiPromptsAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiPromptsAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiPromptsAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiPromptsAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiPromptsAuditLogModel>): AiPromptsAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiPromptsAuditLogModel = {
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
