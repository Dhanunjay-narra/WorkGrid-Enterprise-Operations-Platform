import { CrmHealthAssignmentModel, CrmHealthAssignmentValidator } from "@nexora/types/domains/crm/health/CrmHealthAssignment";

export class CrmHealthAssignmentService {
  private repository = new Map<string, CrmHealthAssignmentModel>();

  public create(data: Omit<CrmHealthAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): CrmHealthAssignmentModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmHealthAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmHealthAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmHealthAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmHealthAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmHealthAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmHealthAssignmentModel>): CrmHealthAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmHealthAssignmentModel = {
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
