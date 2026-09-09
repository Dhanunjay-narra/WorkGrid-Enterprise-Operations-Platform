import { SecurityPolicyModel, SecurityPolicyValidator } from "@nexora/types/domains/security/SecurityPolicy";

export class SecurityPolicyService {
  private repository = new Map<string, SecurityPolicyModel>();

  public create(data: Omit<SecurityPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): SecurityPolicyModel {
    const id = "secu_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SecurityPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SecurityPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SecurityPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SecurityPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SecurityPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SecurityPolicyModel>): SecurityPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SecurityPolicyModel = {
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
