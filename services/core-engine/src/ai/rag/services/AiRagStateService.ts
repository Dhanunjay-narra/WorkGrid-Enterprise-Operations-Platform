import { AiRagStateModel, AiRagStateValidator } from "@nexora/types/domains/ai/rag/AiRagState";

export class AiRagStateService {
  private repository = new Map<string, AiRagStateModel>();

  public create(data: Omit<AiRagStateModel, "id" | "version" | "createdAt" | "updatedAt">): AiRagStateModel {
    const id = "ai_r_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiRagStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiRagStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiRagState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiRagStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiRagStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiRagStateModel>): AiRagStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiRagStateModel = {
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
