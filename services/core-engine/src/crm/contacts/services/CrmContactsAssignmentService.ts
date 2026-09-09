import { CrmContactsAssignmentModel, CrmContactsAssignmentValidator } from "@nexora/types/domains/crm/contacts/CrmContactsAssignment";

export class CrmContactsAssignmentService {
  private repository = new Map<string, CrmContactsAssignmentModel>();

  public create(data: Omit<CrmContactsAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): CrmContactsAssignmentModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmContactsAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmContactsAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmContactsAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmContactsAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmContactsAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmContactsAssignmentModel>): CrmContactsAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmContactsAssignmentModel = {
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
