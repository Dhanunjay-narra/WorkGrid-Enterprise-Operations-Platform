import { AiMemoryTaskModel, AiMemoryTaskValidator } from "@nexora/types/domains/ai/memory/AiMemoryTask";

export class AiMemoryTaskService {
  private repository = new Map<string, AiMemoryTaskModel>();

  public create(data: Omit<AiMemoryTaskModel, "id" | "version" | "createdAt" | "updatedAt">): AiMemoryTaskModel {
    const id = "ai_m_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiMemoryTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiMemoryTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiMemoryTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiMemoryTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiMemoryTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiMemoryTaskModel>): AiMemoryTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiMemoryTaskModel = {
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
