import { AiEvaluationsSummaryModel, AiEvaluationsSummaryValidator } from "@nexora/types/domains/ai/evaluations/AiEvaluationsSummary";

export class AiEvaluationsSummaryService {
  private repository = new Map<string, AiEvaluationsSummaryModel>();

  public create(data: Omit<AiEvaluationsSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): AiEvaluationsSummaryModel {
    const id = "ai_e_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiEvaluationsSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiEvaluationsSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiEvaluationsSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiEvaluationsSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiEvaluationsSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiEvaluationsSummaryModel>): AiEvaluationsSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiEvaluationsSummaryModel = {
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
