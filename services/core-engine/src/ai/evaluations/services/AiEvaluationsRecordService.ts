import { AiEvaluationsRecordModel, AiEvaluationsRecordValidator } from "@nexora/types/domains/ai/evaluations/AiEvaluationsRecord";

export class AiEvaluationsRecordService {
  private repository = new Map<string, AiEvaluationsRecordModel>();

  public create(data: Omit<AiEvaluationsRecordModel, "id" | "version" | "createdAt" | "updatedAt">): AiEvaluationsRecordModel {
    const id = "ai_e_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiEvaluationsRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiEvaluationsRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiEvaluationsRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiEvaluationsRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiEvaluationsRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiEvaluationsRecordModel>): AiEvaluationsRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiEvaluationsRecordModel = {
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
