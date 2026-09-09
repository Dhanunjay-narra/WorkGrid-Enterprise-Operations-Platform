import { AiEvaluationsQueueModel, AiEvaluationsQueueValidator } from "@nexora/types/domains/ai/evaluations/AiEvaluationsQueue";

export class AiEvaluationsQueueService {
  private repository = new Map<string, AiEvaluationsQueueModel>();

  public create(data: Omit<AiEvaluationsQueueModel, "id" | "version" | "createdAt" | "updatedAt">): AiEvaluationsQueueModel {
    const id = "ai_e_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiEvaluationsQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiEvaluationsQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiEvaluationsQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiEvaluationsQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiEvaluationsQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiEvaluationsQueueModel>): AiEvaluationsQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiEvaluationsQueueModel = {
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
