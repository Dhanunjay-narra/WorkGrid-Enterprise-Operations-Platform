import { IntStripeProfileModel, IntStripeProfileValidator } from "@nexora/types/domains/int/stripe/IntStripeProfile";

export class IntStripeProfileService {
  private repository = new Map<string, IntStripeProfileModel>();

  public create(data: Omit<IntStripeProfileModel, "id" | "version" | "createdAt" | "updatedAt">): IntStripeProfileModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntStripeProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntStripeProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntStripeProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntStripeProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntStripeProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntStripeProfileModel>): IntStripeProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntStripeProfileModel = {
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
