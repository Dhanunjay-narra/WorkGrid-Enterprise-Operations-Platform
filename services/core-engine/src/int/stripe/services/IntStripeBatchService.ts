import { IntStripeBatchModel, IntStripeBatchValidator } from "@nexora/types/domains/int/stripe/IntStripeBatch";

export class IntStripeBatchService {
  private repository = new Map<string, IntStripeBatchModel>();

  public create(data: Omit<IntStripeBatchModel, "id" | "version" | "createdAt" | "updatedAt">): IntStripeBatchModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntStripeBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntStripeBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntStripeBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntStripeBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntStripeBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntStripeBatchModel>): IntStripeBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntStripeBatchModel = {
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
