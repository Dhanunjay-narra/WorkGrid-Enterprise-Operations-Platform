import { AiToolsMappingModel, AiToolsMappingValidator } from "@nexora/types/domains/ai/tools/AiToolsMapping";

export class AiToolsMappingService {
  private repository = new Map<string, AiToolsMappingModel>();

  public create(data: Omit<AiToolsMappingModel, "id" | "version" | "createdAt" | "updatedAt">): AiToolsMappingModel {
    const id = "ai_t_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiToolsMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiToolsMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiToolsMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiToolsMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiToolsMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiToolsMappingModel>): AiToolsMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiToolsMappingModel = {
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
