import { AiGatewayRecordModel, AiGatewayRecordValidator } from "@nexora/types/domains/ai/gateway/AiGatewayRecord";

export class AiGatewayRecordService {
  private repository = new Map<string, AiGatewayRecordModel>();

  public create(data: Omit<AiGatewayRecordModel, "id" | "version" | "createdAt" | "updatedAt">): AiGatewayRecordModel {
    const id = "ai_g_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiGatewayRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiGatewayRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiGatewayRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiGatewayRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiGatewayRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiGatewayRecordModel>): AiGatewayRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiGatewayRecordModel = {
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
