import { IntStripeEventModel, IntStripeEventValidator } from "@nexora/types/domains/int/stripe/IntStripeEvent";

export class IntStripeEventService {
  private repository = new Map<string, IntStripeEventModel>();

  public create(data: Omit<IntStripeEventModel, "id" | "version" | "createdAt" | "updatedAt">): IntStripeEventModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntStripeEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntStripeEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntStripeEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntStripeEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntStripeEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntStripeEventModel>): IntStripeEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntStripeEventModel = {
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
