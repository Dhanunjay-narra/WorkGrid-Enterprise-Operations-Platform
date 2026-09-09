import { SupportSurveysRecordModel, SupportSurveysRecordValidator } from "@nexora/types/domains/support/surveys/SupportSurveysRecord";

export class SupportSurveysRecordService {
  private repository = new Map<string, SupportSurveysRecordModel>();

  public create(data: Omit<SupportSurveysRecordModel, "id" | "version" | "createdAt" | "updatedAt">): SupportSurveysRecordModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportSurveysRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportSurveysRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportSurveysRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportSurveysRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportSurveysRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportSurveysRecordModel>): SupportSurveysRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportSurveysRecordModel = {
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
