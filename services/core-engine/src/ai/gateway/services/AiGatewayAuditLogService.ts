import { AiGatewayAuditLogModel, AiGatewayAuditLogValidator } from "@nexora/types/domains/ai/gateway/AiGatewayAuditLog";

export class AiGatewayAuditLogService {
  private repository = new Map<string, AiGatewayAuditLogModel>();

  public create(data: Omit<AiGatewayAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): AiGatewayAuditLogModel {
    const id = "ai_g_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiGatewayAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiGatewayAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiGatewayAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiGatewayAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiGatewayAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiGatewayAuditLogModel>): AiGatewayAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiGatewayAuditLogModel = {
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
