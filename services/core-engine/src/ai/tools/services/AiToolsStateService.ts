import { AiToolsStateModel, AiToolsStateValidator } from "@nexora/types/domains/ai/tools/AiToolsState";

export class AiToolsStateService {
  private repository = new Map<string, AiToolsStateModel>();

  public create(data: Omit<AiToolsStateModel, "id" | "version" | "createdAt" | "updatedAt">): AiToolsStateModel {
    const id = "ai_t_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiToolsStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiToolsStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiToolsState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiToolsStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiToolsStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiToolsStateModel>): AiToolsStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiToolsStateModel = {
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
