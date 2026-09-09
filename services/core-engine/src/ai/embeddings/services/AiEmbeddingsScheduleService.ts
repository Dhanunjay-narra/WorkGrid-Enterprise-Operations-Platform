import { AiEmbeddingsScheduleModel, AiEmbeddingsScheduleValidator } from "@nexora/types/domains/ai/embeddings/AiEmbeddingsSchedule";

export class AiEmbeddingsScheduleService {
  private repository = new Map<string, AiEmbeddingsScheduleModel>();

  public create(data: Omit<AiEmbeddingsScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): AiEmbeddingsScheduleModel {
    const id = "ai_e_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiEmbeddingsScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiEmbeddingsScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiEmbeddingsSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiEmbeddingsScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiEmbeddingsScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiEmbeddingsScheduleModel>): AiEmbeddingsScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiEmbeddingsScheduleModel = {
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
