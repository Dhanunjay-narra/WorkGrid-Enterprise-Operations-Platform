import { IntStripeItemModel, IntStripeItemValidator } from "@nexora/types/domains/int/stripe/IntStripeItem";

export class IntStripeItemService {
  private repository = new Map<string, IntStripeItemModel>();

  public create(data: Omit<IntStripeItemModel, "id" | "version" | "createdAt" | "updatedAt">): IntStripeItemModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntStripeItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntStripeItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntStripeItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntStripeItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntStripeItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntStripeItemModel>): IntStripeItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntStripeItemModel = {
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
