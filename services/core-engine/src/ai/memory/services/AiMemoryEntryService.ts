import { AiMemoryEntryModel, AiMemoryEntryValidator } from "@nexora/types/domains/ai/memory/AiMemoryEntry";

export class AiMemoryEntryService {
  private repository = new Map<string, AiMemoryEntryModel>();

  public create(data: Omit<AiMemoryEntryModel, "id" | "version" | "createdAt" | "updatedAt">): AiMemoryEntryModel {
    const id = "ai_m_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiMemoryEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiMemoryEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiMemoryEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiMemoryEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiMemoryEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiMemoryEntryModel>): AiMemoryEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiMemoryEntryModel = {
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
