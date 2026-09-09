import { AiEvaluationsEntryModel, AiEvaluationsEntryValidator } from "@nexora/types/domains/ai/evaluations/AiEvaluationsEntry";

export class AiEvaluationsEntryService {
  private repository = new Map<string, AiEvaluationsEntryModel>();

  public create(data: Omit<AiEvaluationsEntryModel, "id" | "version" | "createdAt" | "updatedAt">): AiEvaluationsEntryModel {
    const id = "ai_e_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiEvaluationsEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiEvaluationsEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiEvaluationsEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiEvaluationsEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiEvaluationsEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiEvaluationsEntryModel>): AiEvaluationsEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiEvaluationsEntryModel = {
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
