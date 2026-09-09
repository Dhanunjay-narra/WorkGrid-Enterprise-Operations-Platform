import { AiToolsTaskModel, AiToolsTaskValidator } from "@nexora/types/domains/ai/tools/AiToolsTask";

export class AiToolsTaskService {
  private repository = new Map<string, AiToolsTaskModel>();

  public create(data: Omit<AiToolsTaskModel, "id" | "version" | "createdAt" | "updatedAt">): AiToolsTaskModel {
    const id = "ai_t_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiToolsTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiToolsTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiToolsTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiToolsTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiToolsTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiToolsTaskModel>): AiToolsTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiToolsTaskModel = {
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
