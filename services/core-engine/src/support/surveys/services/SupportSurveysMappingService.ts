import { SupportSurveysMappingModel, SupportSurveysMappingValidator } from "@nexora/types/domains/support/surveys/SupportSurveysMapping";

export class SupportSurveysMappingService {
  private repository = new Map<string, SupportSurveysMappingModel>();

  public create(data: Omit<SupportSurveysMappingModel, "id" | "version" | "createdAt" | "updatedAt">): SupportSurveysMappingModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportSurveysMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportSurveysMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportSurveysMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportSurveysMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportSurveysMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportSurveysMappingModel>): SupportSurveysMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportSurveysMappingModel = {
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
