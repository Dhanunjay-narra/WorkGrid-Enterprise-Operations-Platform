import { RbacAssignmentModel, RbacAssignmentValidator } from "@nexora/types/domains/rbac/RbacAssignment";

export class RbacAssignmentService {
  private repository = new Map<string, RbacAssignmentModel>();

  public create(data: Omit<RbacAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): RbacAssignmentModel {
    const id = "rbac_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: RbacAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = RbacAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for RbacAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): RbacAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: RbacAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<RbacAssignmentModel>): RbacAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: RbacAssignmentModel = {
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
