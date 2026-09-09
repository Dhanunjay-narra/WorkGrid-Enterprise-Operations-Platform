import { IdentityPolicyModel, IdentityPolicyValidator } from "@nexora/types/domains/identity/IdentityPolicy";

export class IdentityPolicyService {
  private repository = new Map<string, IdentityPolicyModel>();

  public create(data: Omit<IdentityPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): IdentityPolicyModel {
    const id = "iden_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IdentityPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IdentityPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IdentityPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IdentityPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IdentityPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IdentityPolicyModel>): IdentityPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IdentityPolicyModel = {
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
