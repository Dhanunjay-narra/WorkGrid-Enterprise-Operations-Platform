import { SupportSurveysProfileModel, SupportSurveysProfileValidator } from "@nexora/types/domains/support/surveys/SupportSurveysProfile";

export class SupportSurveysProfileService {
  private repository = new Map<string, SupportSurveysProfileModel>();

  public create(data: Omit<SupportSurveysProfileModel, "id" | "version" | "createdAt" | "updatedAt">): SupportSurveysProfileModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportSurveysProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportSurveysProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportSurveysProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportSurveysProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportSurveysProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportSurveysProfileModel>): SupportSurveysProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportSurveysProfileModel = {
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
