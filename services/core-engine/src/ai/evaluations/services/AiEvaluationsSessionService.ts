import { AiEvaluationsSessionModel, AiEvaluationsSessionValidator } from "@nexora/types/domains/ai/evaluations/AiEvaluationsSession";

export class AiEvaluationsSessionService {
  private repository = new Map<string, AiEvaluationsSessionModel>();

  public create(data: Omit<AiEvaluationsSessionModel, "id" | "version" | "createdAt" | "updatedAt">): AiEvaluationsSessionModel {
    const id = "ai_e_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiEvaluationsSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiEvaluationsSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiEvaluationsSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiEvaluationsSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiEvaluationsSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiEvaluationsSessionModel>): AiEvaluationsSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiEvaluationsSessionModel = {
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
