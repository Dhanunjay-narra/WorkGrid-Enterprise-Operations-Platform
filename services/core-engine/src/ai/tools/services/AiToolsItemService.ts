import { AiToolsItemModel, AiToolsItemValidator } from "@nexora/types/domains/ai/tools/AiToolsItem";

export class AiToolsItemService {
  private repository = new Map<string, AiToolsItemModel>();

  public create(data: Omit<AiToolsItemModel, "id" | "version" | "createdAt" | "updatedAt">): AiToolsItemModel {
    const id = "ai_t_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiToolsItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiToolsItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiToolsItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiToolsItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiToolsItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiToolsItemModel>): AiToolsItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiToolsItemModel = {
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
