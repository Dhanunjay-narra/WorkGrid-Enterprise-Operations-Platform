import { AiMemorySummaryModel, AiMemorySummaryValidator } from "@nexora/types/domains/ai/memory/AiMemorySummary";

export class AiMemorySummaryService {
  private repository = new Map<string, AiMemorySummaryModel>();

  public create(data: Omit<AiMemorySummaryModel, "id" | "version" | "createdAt" | "updatedAt">): AiMemorySummaryModel {
    const id = "ai_m_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiMemorySummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiMemorySummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiMemorySummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiMemorySummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiMemorySummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiMemorySummaryModel>): AiMemorySummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiMemorySummaryModel = {
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
