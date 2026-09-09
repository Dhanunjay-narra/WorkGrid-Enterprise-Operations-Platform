import { AiRagSummaryModel, AiRagSummaryValidator } from "@nexora/types/domains/ai/rag/AiRagSummary";

export class AiRagSummaryService {
  private repository = new Map<string, AiRagSummaryModel>();

  public create(data: Omit<AiRagSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): AiRagSummaryModel {
    const id = "ai_r_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiRagSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiRagSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiRagSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiRagSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiRagSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiRagSummaryModel>): AiRagSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiRagSummaryModel = {
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
