import { AiRagPolicyModel, AiRagPolicyValidator } from "@nexora/types/domains/ai/rag/AiRagPolicy";

export class AiRagPolicyService {
  private repository = new Map<string, AiRagPolicyModel>();

  public create(data: Omit<AiRagPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): AiRagPolicyModel {
    const id = "ai_r_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiRagPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiRagPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiRagPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiRagPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiRagPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiRagPolicyModel>): AiRagPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiRagPolicyModel = {
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
