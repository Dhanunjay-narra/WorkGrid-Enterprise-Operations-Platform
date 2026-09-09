import { AiToolsBatchModel, AiToolsBatchValidator } from "@nexora/types/domains/ai/tools/AiToolsBatch";

export class AiToolsBatchService {
  private repository = new Map<string, AiToolsBatchModel>();

  public create(data: Omit<AiToolsBatchModel, "id" | "version" | "createdAt" | "updatedAt">): AiToolsBatchModel {
    const id = "ai_t_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiToolsBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiToolsBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiToolsBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiToolsBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiToolsBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiToolsBatchModel>): AiToolsBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiToolsBatchModel = {
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
