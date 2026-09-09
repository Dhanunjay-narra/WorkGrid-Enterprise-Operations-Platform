import { CrmDealsAssignmentModel, CrmDealsAssignmentValidator } from "@nexora/types/domains/crm/deals/CrmDealsAssignment";

export class CrmDealsAssignmentService {
  private repository = new Map<string, CrmDealsAssignmentModel>();

  public create(data: Omit<CrmDealsAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): CrmDealsAssignmentModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmDealsAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmDealsAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmDealsAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmDealsAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmDealsAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmDealsAssignmentModel>): CrmDealsAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmDealsAssignmentModel = {
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
