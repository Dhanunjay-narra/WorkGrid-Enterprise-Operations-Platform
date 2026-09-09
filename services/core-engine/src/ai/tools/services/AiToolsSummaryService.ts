import { AiToolsSummaryModel, AiToolsSummaryValidator } from "@nexora/types/domains/ai/tools/AiToolsSummary";

export class AiToolsSummaryService {
  private repository = new Map<string, AiToolsSummaryModel>();

  public create(data: Omit<AiToolsSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): AiToolsSummaryModel {
    const id = "ai_t_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiToolsSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiToolsSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiToolsSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiToolsSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiToolsSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiToolsSummaryModel>): AiToolsSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiToolsSummaryModel = {
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
