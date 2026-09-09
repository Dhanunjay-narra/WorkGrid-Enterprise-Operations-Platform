import { AiMemoryNodeModel, AiMemoryNodeValidator } from "@nexora/types/domains/ai/memory/AiMemoryNode";

export class AiMemoryNodeService {
  private repository = new Map<string, AiMemoryNodeModel>();

  public create(data: Omit<AiMemoryNodeModel, "id" | "version" | "createdAt" | "updatedAt">): AiMemoryNodeModel {
    const id = "ai_m_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiMemoryNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiMemoryNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiMemoryNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiMemoryNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiMemoryNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiMemoryNodeModel>): AiMemoryNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiMemoryNodeModel = {
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
