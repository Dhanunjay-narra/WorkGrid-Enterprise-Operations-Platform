import { SupportSurveysConfigModel, SupportSurveysConfigValidator } from "@nexora/types/domains/support/surveys/SupportSurveysConfig";

export class SupportSurveysConfigService {
  private repository = new Map<string, SupportSurveysConfigModel>();

  public create(data: Omit<SupportSurveysConfigModel, "id" | "version" | "createdAt" | "updatedAt">): SupportSurveysConfigModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportSurveysConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportSurveysConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportSurveysConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportSurveysConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportSurveysConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportSurveysConfigModel>): SupportSurveysConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportSurveysConfigModel = {
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
