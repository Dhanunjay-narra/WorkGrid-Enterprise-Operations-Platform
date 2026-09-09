import { SupportSurveysItemModel, SupportSurveysItemValidator } from "@nexora/types/domains/support/surveys/SupportSurveysItem";

export class SupportSurveysItemService {
  private repository = new Map<string, SupportSurveysItemModel>();

  public create(data: Omit<SupportSurveysItemModel, "id" | "version" | "createdAt" | "updatedAt">): SupportSurveysItemModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportSurveysItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportSurveysItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportSurveysItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportSurveysItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportSurveysItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportSurveysItemModel>): SupportSurveysItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportSurveysItemModel = {
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
