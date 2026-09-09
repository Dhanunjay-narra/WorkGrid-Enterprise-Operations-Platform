import { SecSecurityPolicyData, SecSecurityPolicyValidator } from "../../../../packages/types/src/domains/security/SecSecurityPolicy";

export class SecSecurityPolicyService {
  private repository = new Map<string, SecSecurityPolicyData>();

  public create(data: Omit<SecSecurityPolicyData, "id" | "createdAt" | "updatedAt">): SecSecurityPolicyData {
    const id = "sec_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: SecSecurityPolicyData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = SecSecurityPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SecSecurityPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SecSecurityPolicyData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): SecSecurityPolicyData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<SecSecurityPolicyData>): SecSecurityPolicyData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SecSecurityPolicyData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
