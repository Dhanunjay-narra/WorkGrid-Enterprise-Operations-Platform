import { AiMemoryPolicyModel, AiMemoryPolicyValidator } from "@nexora/types/domains/ai/memory/AiMemoryPolicy";

export class AiMemoryPolicyService {
  private repository = new Map<string, AiMemoryPolicyModel>();

  public create(data: Omit<AiMemoryPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): AiMemoryPolicyModel {
    const id = "ai_m_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiMemoryPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiMemoryPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiMemoryPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiMemoryPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiMemoryPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiMemoryPolicyModel>): AiMemoryPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiMemoryPolicyModel = {
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
