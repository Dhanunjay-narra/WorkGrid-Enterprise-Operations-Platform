import { AiToolsPayloadModel, AiToolsPayloadValidator } from "@nexora/types/domains/ai/tools/AiToolsPayload";

export class AiToolsPayloadService {
  private repository = new Map<string, AiToolsPayloadModel>();

  public create(data: Omit<AiToolsPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): AiToolsPayloadModel {
    const id = "ai_t_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiToolsPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiToolsPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiToolsPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiToolsPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiToolsPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiToolsPayloadModel>): AiToolsPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiToolsPayloadModel = {
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
