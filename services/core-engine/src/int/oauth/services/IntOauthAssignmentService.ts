import { IntOauthAssignmentModel, IntOauthAssignmentValidator } from "@nexora/types/domains/int/oauth/IntOauthAssignment";

export class IntOauthAssignmentService {
  private repository = new Map<string, IntOauthAssignmentModel>();

  public create(data: Omit<IntOauthAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): IntOauthAssignmentModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntOauthAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntOauthAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntOauthAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntOauthAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntOauthAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntOauthAssignmentModel>): IntOauthAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntOauthAssignmentModel = {
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
