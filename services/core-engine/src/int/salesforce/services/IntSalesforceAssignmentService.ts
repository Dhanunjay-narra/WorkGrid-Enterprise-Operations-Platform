import { IntSalesforceAssignmentModel, IntSalesforceAssignmentValidator } from "@nexora/types/domains/int/salesforce/IntSalesforceAssignment";

export class IntSalesforceAssignmentService {
  private repository = new Map<string, IntSalesforceAssignmentModel>();

  public create(data: Omit<IntSalesforceAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): IntSalesforceAssignmentModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntSalesforceAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntSalesforceAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntSalesforceAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntSalesforceAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntSalesforceAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntSalesforceAssignmentModel>): IntSalesforceAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntSalesforceAssignmentModel = {
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
