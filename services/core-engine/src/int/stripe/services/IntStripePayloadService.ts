import { IntStripePayloadModel, IntStripePayloadValidator } from "@nexora/types/domains/int/stripe/IntStripePayload";

export class IntStripePayloadService {
  private repository = new Map<string, IntStripePayloadModel>();

  public create(data: Omit<IntStripePayloadModel, "id" | "version" | "createdAt" | "updatedAt">): IntStripePayloadModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntStripePayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntStripePayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntStripePayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntStripePayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntStripePayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntStripePayloadModel>): IntStripePayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntStripePayloadModel = {
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
