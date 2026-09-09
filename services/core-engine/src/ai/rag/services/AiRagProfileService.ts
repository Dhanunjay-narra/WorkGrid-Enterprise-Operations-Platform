import { AiRagProfileModel, AiRagProfileValidator } from "@nexora/types/domains/ai/rag/AiRagProfile";

export class AiRagProfileService {
  private repository = new Map<string, AiRagProfileModel>();

  public create(data: Omit<AiRagProfileModel, "id" | "version" | "createdAt" | "updatedAt">): AiRagProfileModel {
    const id = "ai_r_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiRagProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiRagProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiRagProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiRagProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiRagProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiRagProfileModel>): AiRagProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiRagProfileModel = {
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
