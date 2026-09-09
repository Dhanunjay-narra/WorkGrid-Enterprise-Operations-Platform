import { CrmAccountsAssignmentModel, CrmAccountsAssignmentValidator } from "@nexora/types/domains/crm/accounts/CrmAccountsAssignment";

export class CrmAccountsAssignmentService {
  private repository = new Map<string, CrmAccountsAssignmentModel>();

  public create(data: Omit<CrmAccountsAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): CrmAccountsAssignmentModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmAccountsAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmAccountsAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmAccountsAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmAccountsAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmAccountsAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmAccountsAssignmentModel>): CrmAccountsAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmAccountsAssignmentModel = {
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
