import { IdentityAssignmentModel, IdentityAssignmentValidator } from "@nexora/types/domains/identity/IdentityAssignment";

export class IdentityAssignmentService {
  private repository = new Map<string, IdentityAssignmentModel>();

  public create(data: Omit<IdentityAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): IdentityAssignmentModel {
    const id = "iden_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IdentityAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IdentityAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IdentityAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IdentityAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IdentityAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IdentityAssignmentModel>): IdentityAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IdentityAssignmentModel = {
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
