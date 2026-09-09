import { AiEvaluationsNodeModel, AiEvaluationsNodeValidator } from "@nexora/types/domains/ai/evaluations/AiEvaluationsNode";

export class AiEvaluationsNodeService {
  private repository = new Map<string, AiEvaluationsNodeModel>();

  public create(data: Omit<AiEvaluationsNodeModel, "id" | "version" | "createdAt" | "updatedAt">): AiEvaluationsNodeModel {
    const id = "ai_e_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiEvaluationsNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiEvaluationsNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiEvaluationsNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiEvaluationsNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiEvaluationsNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiEvaluationsNodeModel>): AiEvaluationsNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiEvaluationsNodeModel = {
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
