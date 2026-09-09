import { SupportSurveysSessionModel, SupportSurveysSessionValidator } from "@nexora/types/domains/support/surveys/SupportSurveysSession";

export class SupportSurveysSessionService {
  private repository = new Map<string, SupportSurveysSessionModel>();

  public create(data: Omit<SupportSurveysSessionModel, "id" | "version" | "createdAt" | "updatedAt">): SupportSurveysSessionModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportSurveysSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportSurveysSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportSurveysSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportSurveysSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportSurveysSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportSurveysSessionModel>): SupportSurveysSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportSurveysSessionModel = {
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
