import { AiToolsEventModel, AiToolsEventValidator } from "@nexora/types/domains/ai/tools/AiToolsEvent";

export class AiToolsEventService {
  private repository = new Map<string, AiToolsEventModel>();

  public create(data: Omit<AiToolsEventModel, "id" | "version" | "createdAt" | "updatedAt">): AiToolsEventModel {
    const id = "ai_t_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiToolsEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiToolsEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiToolsEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiToolsEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiToolsEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiToolsEventModel>): AiToolsEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiToolsEventModel = {
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
