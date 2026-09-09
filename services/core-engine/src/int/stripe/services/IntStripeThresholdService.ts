import { IntStripeThresholdModel, IntStripeThresholdValidator } from "@nexora/types/domains/int/stripe/IntStripeThreshold";

export class IntStripeThresholdService {
  private repository = new Map<string, IntStripeThresholdModel>();

  public create(data: Omit<IntStripeThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): IntStripeThresholdModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntStripeThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntStripeThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntStripeThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntStripeThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntStripeThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntStripeThresholdModel>): IntStripeThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntStripeThresholdModel = {
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
