import { AiGatewayTransactionModel, AiGatewayTransactionValidator } from "@nexora/types/domains/ai/gateway/AiGatewayTransaction";

export class AiGatewayTransactionService {
  private repository = new Map<string, AiGatewayTransactionModel>();

  public create(data: Omit<AiGatewayTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): AiGatewayTransactionModel {
    const id = "ai_g_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiGatewayTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiGatewayTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiGatewayTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiGatewayTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiGatewayTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiGatewayTransactionModel>): AiGatewayTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiGatewayTransactionModel = {
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
