import { SupportSurveysAssignmentModel, SupportSurveysAssignmentValidator } from "@nexora/types/domains/support/surveys/SupportSurveysAssignment";

export class SupportSurveysAssignmentService {
  private repository = new Map<string, SupportSurveysAssignmentModel>();

  public create(data: Omit<SupportSurveysAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): SupportSurveysAssignmentModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportSurveysAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportSurveysAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportSurveysAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportSurveysAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportSurveysAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportSurveysAssignmentModel>): SupportSurveysAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportSurveysAssignmentModel = {
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
