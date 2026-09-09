import { AiConfidenceScorecardData, AiConfidenceScorecardValidator } from "../../../../packages/types/src/domains/ai/AiConfidenceScorecard";

export class AiConfidenceScorecardService {
  private repository = new Map<string, AiConfidenceScorecardData>();

  public create(data: Omit<AiConfidenceScorecardData, "id" | "createdAt" | "updatedAt">): AiConfidenceScorecardData {
    const id = "ai_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: AiConfidenceScorecardData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiConfidenceScorecardValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiConfidenceScorecard: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiConfidenceScorecardData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): AiConfidenceScorecardData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<AiConfidenceScorecardData>): AiConfidenceScorecardData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiConfidenceScorecardData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
