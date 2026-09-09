import { FinanceTaxesAssignmentModel, FinanceTaxesAssignmentValidator } from "@nexora/types/domains/finance/taxes/FinanceTaxesAssignment";

export class FinanceTaxesAssignmentService {
  private repository = new Map<string, FinanceTaxesAssignmentModel>();

  public create(data: Omit<FinanceTaxesAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceTaxesAssignmentModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceTaxesAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceTaxesAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceTaxesAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceTaxesAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceTaxesAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceTaxesAssignmentModel>): FinanceTaxesAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceTaxesAssignmentModel = {
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
