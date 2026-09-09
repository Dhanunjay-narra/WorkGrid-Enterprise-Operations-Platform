import { SupCustomerSurveyData, SupCustomerSurveyValidator } from "../../../../packages/types/src/domains/support/SupCustomerSurvey";

export class SupCustomerSurveyService {
  private repository = new Map<string, SupCustomerSurveyData>();

  public create(data: Omit<SupCustomerSurveyData, "id" | "createdAt" | "updatedAt">): SupCustomerSurveyData {
    const id = "sup_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: SupCustomerSurveyData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupCustomerSurveyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupCustomerSurvey: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupCustomerSurveyData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): SupCustomerSurveyData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<SupCustomerSurveyData>): SupCustomerSurveyData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupCustomerSurveyData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
