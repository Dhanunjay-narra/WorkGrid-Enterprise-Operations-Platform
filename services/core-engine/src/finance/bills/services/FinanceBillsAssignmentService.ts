import { FinanceBillsAssignmentModel, FinanceBillsAssignmentValidator } from "@nexora/types/domains/finance/bills/FinanceBillsAssignment";

export class FinanceBillsAssignmentService {
  private repository = new Map<string, FinanceBillsAssignmentModel>();

  public create(data: Omit<FinanceBillsAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceBillsAssignmentModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceBillsAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceBillsAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceBillsAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceBillsAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceBillsAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceBillsAssignmentModel>): FinanceBillsAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceBillsAssignmentModel = {
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
