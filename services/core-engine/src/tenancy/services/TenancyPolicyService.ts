import { TenancyPolicyModel, TenancyPolicyValidator } from "@nexora/types/domains/tenancy/TenancyPolicy";

export class TenancyPolicyService {
  private repository = new Map<string, TenancyPolicyModel>();

  public create(data: Omit<TenancyPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): TenancyPolicyModel {
    const id = "tena_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: TenancyPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = TenancyPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for TenancyPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): TenancyPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: TenancyPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<TenancyPolicyModel>): TenancyPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: TenancyPolicyModel = {
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
