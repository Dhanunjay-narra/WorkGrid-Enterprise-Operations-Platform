import { AiEvaluationScoreData, AiEvaluationScoreValidator } from "../../../../packages/types/src/domains/ai/AiEvaluationScore";

export class AiEvaluationScoreService {
  private repository = new Map<string, AiEvaluationScoreData>();

  public create(data: Omit<AiEvaluationScoreData, "id" | "createdAt" | "updatedAt">): AiEvaluationScoreData {
    const id = "ai_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: AiEvaluationScoreData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiEvaluationScoreValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiEvaluationScore: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiEvaluationScoreData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): AiEvaluationScoreData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<AiEvaluationScoreData>): AiEvaluationScoreData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiEvaluationScoreData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
