import { AiMemoryConfigModel, AiMemoryConfigValidator } from "@nexora/types/domains/ai/memory/AiMemoryConfig";

export class AiMemoryConfigService {
  private repository = new Map<string, AiMemoryConfigModel>();

  public create(data: Omit<AiMemoryConfigModel, "id" | "version" | "createdAt" | "updatedAt">): AiMemoryConfigModel {
    const id = "ai_m_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiMemoryConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiMemoryConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiMemoryConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiMemoryConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiMemoryConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiMemoryConfigModel>): AiMemoryConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiMemoryConfigModel = {
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
