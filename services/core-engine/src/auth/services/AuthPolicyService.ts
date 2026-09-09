import { AuthPolicyModel, AuthPolicyValidator } from "@nexora/types/domains/auth/AuthPolicy";

export class AuthPolicyService {
  private repository = new Map<string, AuthPolicyModel>();

  public create(data: Omit<AuthPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): AuthPolicyModel {
    const id = "auth_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AuthPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AuthPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AuthPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AuthPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AuthPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AuthPolicyModel>): AuthPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AuthPolicyModel = {
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
