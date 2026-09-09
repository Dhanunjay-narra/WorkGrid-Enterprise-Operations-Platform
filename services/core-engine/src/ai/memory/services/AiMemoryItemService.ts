import { AiMemoryItemModel, AiMemoryItemValidator } from "@nexora/types/domains/ai/memory/AiMemoryItem";

export class AiMemoryItemService {
  private repository = new Map<string, AiMemoryItemModel>();

  public create(data: Omit<AiMemoryItemModel, "id" | "version" | "createdAt" | "updatedAt">): AiMemoryItemModel {
    const id = "ai_m_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiMemoryItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiMemoryItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiMemoryItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiMemoryItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiMemoryItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiMemoryItemModel>): AiMemoryItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiMemoryItemModel = {
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
