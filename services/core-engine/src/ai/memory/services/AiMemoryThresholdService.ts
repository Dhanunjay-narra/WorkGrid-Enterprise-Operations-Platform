import { AiMemoryThresholdModel, AiMemoryThresholdValidator } from "@nexora/types/domains/ai/memory/AiMemoryThreshold";

export class AiMemoryThresholdService {
  private repository = new Map<string, AiMemoryThresholdModel>();

  public create(data: Omit<AiMemoryThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): AiMemoryThresholdModel {
    const id = "ai_m_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiMemoryThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiMemoryThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiMemoryThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiMemoryThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiMemoryThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiMemoryThresholdModel>): AiMemoryThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiMemoryThresholdModel = {
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
