import { AiEvaluationsTaskModel, AiEvaluationsTaskValidator } from "@nexora/types/domains/ai/evaluations/AiEvaluationsTask";

export class AiEvaluationsTaskService {
  private repository = new Map<string, AiEvaluationsTaskModel>();

  public create(data: Omit<AiEvaluationsTaskModel, "id" | "version" | "createdAt" | "updatedAt">): AiEvaluationsTaskModel {
    const id = "ai_e_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiEvaluationsTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiEvaluationsTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiEvaluationsTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiEvaluationsTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiEvaluationsTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiEvaluationsTaskModel>): AiEvaluationsTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiEvaluationsTaskModel = {
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
