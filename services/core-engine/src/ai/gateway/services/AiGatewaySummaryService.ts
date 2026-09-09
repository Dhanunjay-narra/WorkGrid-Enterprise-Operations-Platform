import { AiGatewaySummaryModel, AiGatewaySummaryValidator } from "@nexora/types/domains/ai/gateway/AiGatewaySummary";

export class AiGatewaySummaryService {
  private repository = new Map<string, AiGatewaySummaryModel>();

  public create(data: Omit<AiGatewaySummaryModel, "id" | "version" | "createdAt" | "updatedAt">): AiGatewaySummaryModel {
    const id = "ai_g_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiGatewaySummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiGatewaySummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiGatewaySummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiGatewaySummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiGatewaySummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiGatewaySummaryModel>): AiGatewaySummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiGatewaySummaryModel = {
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
