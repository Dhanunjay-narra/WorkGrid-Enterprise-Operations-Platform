import { IntStripeSnapshotModel, IntStripeSnapshotValidator } from "@nexora/types/domains/int/stripe/IntStripeSnapshot";

export class IntStripeSnapshotService {
  private repository = new Map<string, IntStripeSnapshotModel>();

  public create(data: Omit<IntStripeSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): IntStripeSnapshotModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntStripeSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntStripeSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntStripeSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntStripeSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntStripeSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntStripeSnapshotModel>): IntStripeSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntStripeSnapshotModel = {
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
