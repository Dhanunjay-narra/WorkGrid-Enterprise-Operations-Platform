import { AiToolsPolicyModel, AiToolsPolicyValidator } from "@nexora/types/domains/ai/tools/AiToolsPolicy";

export class AiToolsPolicyService {
  private repository = new Map<string, AiToolsPolicyModel>();

  public create(data: Omit<AiToolsPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): AiToolsPolicyModel {
    const id = "ai_t_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiToolsPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiToolsPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiToolsPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiToolsPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiToolsPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiToolsPolicyModel>): AiToolsPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiToolsPolicyModel = {
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
