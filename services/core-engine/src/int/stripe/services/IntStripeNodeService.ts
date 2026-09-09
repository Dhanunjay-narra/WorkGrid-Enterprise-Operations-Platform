import { IntStripeNodeModel, IntStripeNodeValidator } from "@nexora/types/domains/int/stripe/IntStripeNode";

export class IntStripeNodeService {
  private repository = new Map<string, IntStripeNodeModel>();

  public create(data: Omit<IntStripeNodeModel, "id" | "version" | "createdAt" | "updatedAt">): IntStripeNodeModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntStripeNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntStripeNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntStripeNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntStripeNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntStripeNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntStripeNodeModel>): IntStripeNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntStripeNodeModel = {
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
