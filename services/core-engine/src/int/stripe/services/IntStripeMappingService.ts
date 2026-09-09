import { IntStripeMappingModel, IntStripeMappingValidator } from "@nexora/types/domains/int/stripe/IntStripeMapping";

export class IntStripeMappingService {
  private repository = new Map<string, IntStripeMappingModel>();

  public create(data: Omit<IntStripeMappingModel, "id" | "version" | "createdAt" | "updatedAt">): IntStripeMappingModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntStripeMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntStripeMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntStripeMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntStripeMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntStripeMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntStripeMappingModel>): IntStripeMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntStripeMappingModel = {
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
