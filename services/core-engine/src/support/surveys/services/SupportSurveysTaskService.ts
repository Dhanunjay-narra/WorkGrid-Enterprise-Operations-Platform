import { SupportSurveysTaskModel, SupportSurveysTaskValidator } from "@nexora/types/domains/support/surveys/SupportSurveysTask";

export class SupportSurveysTaskService {
  private repository = new Map<string, SupportSurveysTaskModel>();

  public create(data: Omit<SupportSurveysTaskModel, "id" | "version" | "createdAt" | "updatedAt">): SupportSurveysTaskModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportSurveysTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportSurveysTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportSurveysTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportSurveysTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportSurveysTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportSurveysTaskModel>): SupportSurveysTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportSurveysTaskModel = {
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
