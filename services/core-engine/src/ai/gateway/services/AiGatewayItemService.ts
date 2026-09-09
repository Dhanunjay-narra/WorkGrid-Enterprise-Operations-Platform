import { AiGatewayItemModel, AiGatewayItemValidator } from "@nexora/types/domains/ai/gateway/AiGatewayItem";

export class AiGatewayItemService {
  private repository = new Map<string, AiGatewayItemModel>();

  public create(data: Omit<AiGatewayItemModel, "id" | "version" | "createdAt" | "updatedAt">): AiGatewayItemModel {
    const id = "ai_g_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiGatewayItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiGatewayItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiGatewayItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiGatewayItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiGatewayItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiGatewayItemModel>): AiGatewayItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiGatewayItemModel = {
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
