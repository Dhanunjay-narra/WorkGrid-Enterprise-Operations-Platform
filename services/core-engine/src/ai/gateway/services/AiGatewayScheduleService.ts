import { AiGatewayScheduleModel, AiGatewayScheduleValidator } from "@nexora/types/domains/ai/gateway/AiGatewaySchedule";

export class AiGatewayScheduleService {
  private repository = new Map<string, AiGatewayScheduleModel>();

  public create(data: Omit<AiGatewayScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): AiGatewayScheduleModel {
    const id = "ai_g_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiGatewayScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiGatewayScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiGatewaySchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiGatewayScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiGatewayScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiGatewayScheduleModel>): AiGatewayScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiGatewayScheduleModel = {
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
