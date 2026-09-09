import { AiRagQueueModel, AiRagQueueValidator } from "@nexora/types/domains/ai/rag/AiRagQueue";

export class AiRagQueueService {
  private repository = new Map<string, AiRagQueueModel>();

  public create(data: Omit<AiRagQueueModel, "id" | "version" | "createdAt" | "updatedAt">): AiRagQueueModel {
    const id = "ai_r_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiRagQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiRagQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiRagQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiRagQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiRagQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiRagQueueModel>): AiRagQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiRagQueueModel = {
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
