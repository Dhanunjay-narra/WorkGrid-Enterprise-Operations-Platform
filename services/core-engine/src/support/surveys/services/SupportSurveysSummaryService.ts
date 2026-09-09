import { SupportSurveysSummaryModel, SupportSurveysSummaryValidator } from "@nexora/types/domains/support/surveys/SupportSurveysSummary";

export class SupportSurveysSummaryService {
  private repository = new Map<string, SupportSurveysSummaryModel>();

  public create(data: Omit<SupportSurveysSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): SupportSurveysSummaryModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportSurveysSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportSurveysSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportSurveysSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportSurveysSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportSurveysSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportSurveysSummaryModel>): SupportSurveysSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportSurveysSummaryModel = {
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
