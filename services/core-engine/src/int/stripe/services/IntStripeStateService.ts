import { IntStripeStateModel, IntStripeStateValidator } from "@nexora/types/domains/int/stripe/IntStripeState";

export class IntStripeStateService {
  private repository = new Map<string, IntStripeStateModel>();

  public create(data: Omit<IntStripeStateModel, "id" | "version" | "createdAt" | "updatedAt">): IntStripeStateModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntStripeStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntStripeStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntStripeState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntStripeStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntStripeStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntStripeStateModel>): IntStripeStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntStripeStateModel = {
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
