import { SupportSurveysNodeModel, SupportSurveysNodeValidator } from "@nexora/types/domains/support/surveys/SupportSurveysNode";

export class SupportSurveysNodeService {
  private repository = new Map<string, SupportSurveysNodeModel>();

  public create(data: Omit<SupportSurveysNodeModel, "id" | "version" | "createdAt" | "updatedAt">): SupportSurveysNodeModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportSurveysNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportSurveysNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportSurveysNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportSurveysNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportSurveysNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportSurveysNodeModel>): SupportSurveysNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportSurveysNodeModel = {
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
