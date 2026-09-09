import { IntStripePolicyModel, IntStripePolicyValidator } from "@nexora/types/domains/int/stripe/IntStripePolicy";

export class IntStripePolicyService {
  private repository = new Map<string, IntStripePolicyModel>();

  public create(data: Omit<IntStripePolicyModel, "id" | "version" | "createdAt" | "updatedAt">): IntStripePolicyModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntStripePolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntStripePolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntStripePolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntStripePolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntStripePolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntStripePolicyModel>): IntStripePolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntStripePolicyModel = {
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
