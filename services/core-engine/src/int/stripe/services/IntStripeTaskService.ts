import { IntStripeTaskModel, IntStripeTaskValidator } from "@nexora/types/domains/int/stripe/IntStripeTask";

export class IntStripeTaskService {
  private repository = new Map<string, IntStripeTaskModel>();

  public create(data: Omit<IntStripeTaskModel, "id" | "version" | "createdAt" | "updatedAt">): IntStripeTaskModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntStripeTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntStripeTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntStripeTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntStripeTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntStripeTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntStripeTaskModel>): IntStripeTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntStripeTaskModel = {
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
