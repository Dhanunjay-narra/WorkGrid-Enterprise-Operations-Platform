import { AiRagThresholdModel, AiRagThresholdValidator } from "@nexora/types/domains/ai/rag/AiRagThreshold";

export class AiRagThresholdService {
  private repository = new Map<string, AiRagThresholdModel>();

  public create(data: Omit<AiRagThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): AiRagThresholdModel {
    const id = "ai_r_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiRagThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiRagThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiRagThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiRagThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiRagThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiRagThresholdModel>): AiRagThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiRagThresholdModel = {
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
