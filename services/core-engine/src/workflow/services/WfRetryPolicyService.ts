import { WfRetryPolicyData, WfRetryPolicyValidator } from "../../../../packages/types/src/domains/workflow/WfRetryPolicy";

export class WfRetryPolicyService {
  private repository = new Map<string, WfRetryPolicyData>();

  public create(data: Omit<WfRetryPolicyData, "id" | "createdAt" | "updatedAt">): WfRetryPolicyData {
    const id = "wor_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: WfRetryPolicyData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = WfRetryPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WfRetryPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WfRetryPolicyData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): WfRetryPolicyData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<WfRetryPolicyData>): WfRetryPolicyData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WfRetryPolicyData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
