import { AiRagBatchModel, AiRagBatchValidator } from "@nexora/types/domains/ai/rag/AiRagBatch";

export class AiRagBatchService {
  private repository = new Map<string, AiRagBatchModel>();

  public create(data: Omit<AiRagBatchModel, "id" | "version" | "createdAt" | "updatedAt">): AiRagBatchModel {
    const id = "ai_r_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiRagBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiRagBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiRagBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiRagBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiRagBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiRagBatchModel>): AiRagBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiRagBatchModel = {
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
