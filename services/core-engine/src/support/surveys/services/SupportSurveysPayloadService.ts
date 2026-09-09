import { SupportSurveysPayloadModel, SupportSurveysPayloadValidator } from "@nexora/types/domains/support/surveys/SupportSurveysPayload";

export class SupportSurveysPayloadService {
  private repository = new Map<string, SupportSurveysPayloadModel>();

  public create(data: Omit<SupportSurveysPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): SupportSurveysPayloadModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportSurveysPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportSurveysPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportSurveysPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportSurveysPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportSurveysPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportSurveysPayloadModel>): SupportSurveysPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportSurveysPayloadModel = {
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
