import { FinanceForecastAssignmentModel, FinanceForecastAssignmentValidator } from "@nexora/types/domains/finance/forecast/FinanceForecastAssignment";

export class FinanceForecastAssignmentService {
  private repository = new Map<string, FinanceForecastAssignmentModel>();

  public create(data: Omit<FinanceForecastAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceForecastAssignmentModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceForecastAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceForecastAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceForecastAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceForecastAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceForecastAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceForecastAssignmentModel>): FinanceForecastAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceForecastAssignmentModel = {
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
