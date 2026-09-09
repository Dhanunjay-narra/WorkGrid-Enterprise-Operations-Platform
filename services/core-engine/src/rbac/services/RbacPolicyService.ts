import { RbacPolicyModel, RbacPolicyValidator } from "@nexora/types/domains/rbac/RbacPolicy";

export class RbacPolicyService {
  private repository = new Map<string, RbacPolicyModel>();

  public create(data: Omit<RbacPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): RbacPolicyModel {
    const id = "rbac_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: RbacPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = RbacPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for RbacPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): RbacPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: RbacPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<RbacPolicyModel>): RbacPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: RbacPolicyModel = {
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
