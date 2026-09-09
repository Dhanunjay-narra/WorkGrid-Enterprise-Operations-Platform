import { AiMemoryProfileModel, AiMemoryProfileValidator } from "@nexora/types/domains/ai/memory/AiMemoryProfile";

export class AiMemoryProfileService {
  private repository = new Map<string, AiMemoryProfileModel>();

  public create(data: Omit<AiMemoryProfileModel, "id" | "version" | "createdAt" | "updatedAt">): AiMemoryProfileModel {
    const id = "ai_m_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiMemoryProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiMemoryProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiMemoryProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiMemoryProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiMemoryProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiMemoryProfileModel>): AiMemoryProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiMemoryProfileModel = {
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
