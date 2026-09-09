import { AiToolsConfigModel, AiToolsConfigValidator } from "@nexora/types/domains/ai/tools/AiToolsConfig";

export class AiToolsConfigService {
  private repository = new Map<string, AiToolsConfigModel>();

  public create(data: Omit<AiToolsConfigModel, "id" | "version" | "createdAt" | "updatedAt">): AiToolsConfigModel {
    const id = "ai_t_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiToolsConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiToolsConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiToolsConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiToolsConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiToolsConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiToolsConfigModel>): AiToolsConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiToolsConfigModel = {
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
