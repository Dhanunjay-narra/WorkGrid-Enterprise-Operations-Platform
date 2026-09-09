import { AiEvaluationsBatchModel, AiEvaluationsBatchValidator } from "@nexora/types/domains/ai/evaluations/AiEvaluationsBatch";

export class AiEvaluationsBatchService {
  private repository = new Map<string, AiEvaluationsBatchModel>();

  public create(data: Omit<AiEvaluationsBatchModel, "id" | "version" | "createdAt" | "updatedAt">): AiEvaluationsBatchModel {
    const id = "ai_e_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiEvaluationsBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiEvaluationsBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiEvaluationsBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiEvaluationsBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiEvaluationsBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiEvaluationsBatchModel>): AiEvaluationsBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiEvaluationsBatchModel = {
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
