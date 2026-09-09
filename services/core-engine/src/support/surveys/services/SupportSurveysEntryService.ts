import { SupportSurveysEntryModel, SupportSurveysEntryValidator } from "@nexora/types/domains/support/surveys/SupportSurveysEntry";

export class SupportSurveysEntryService {
  private repository = new Map<string, SupportSurveysEntryModel>();

  public create(data: Omit<SupportSurveysEntryModel, "id" | "version" | "createdAt" | "updatedAt">): SupportSurveysEntryModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportSurveysEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportSurveysEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportSurveysEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportSurveysEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportSurveysEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportSurveysEntryModel>): SupportSurveysEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportSurveysEntryModel = {
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
