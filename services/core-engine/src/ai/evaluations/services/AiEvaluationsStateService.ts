import { AiEvaluationsStateModel, AiEvaluationsStateValidator } from "@nexora/types/domains/ai/evaluations/AiEvaluationsState";

export class AiEvaluationsStateService {
  private repository = new Map<string, AiEvaluationsStateModel>();

  public create(data: Omit<AiEvaluationsStateModel, "id" | "version" | "createdAt" | "updatedAt">): AiEvaluationsStateModel {
    const id = "ai_e_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiEvaluationsStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiEvaluationsStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiEvaluationsState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiEvaluationsStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiEvaluationsStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiEvaluationsStateModel>): AiEvaluationsStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiEvaluationsStateModel = {
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
