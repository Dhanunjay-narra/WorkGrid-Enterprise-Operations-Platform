import { AiRagMappingModel, AiRagMappingValidator } from "@nexora/types/domains/ai/rag/AiRagMapping";

export class AiRagMappingService {
  private repository = new Map<string, AiRagMappingModel>();

  public create(data: Omit<AiRagMappingModel, "id" | "version" | "createdAt" | "updatedAt">): AiRagMappingModel {
    const id = "ai_r_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiRagMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiRagMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiRagMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiRagMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiRagMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiRagMappingModel>): AiRagMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiRagMappingModel = {
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
