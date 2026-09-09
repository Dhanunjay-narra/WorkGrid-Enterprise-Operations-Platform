import { IntStripeEntryModel, IntStripeEntryValidator } from "@nexora/types/domains/int/stripe/IntStripeEntry";

export class IntStripeEntryService {
  private repository = new Map<string, IntStripeEntryModel>();

  public create(data: Omit<IntStripeEntryModel, "id" | "version" | "createdAt" | "updatedAt">): IntStripeEntryModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntStripeEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntStripeEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntStripeEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntStripeEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntStripeEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntStripeEntryModel>): IntStripeEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntStripeEntryModel = {
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
