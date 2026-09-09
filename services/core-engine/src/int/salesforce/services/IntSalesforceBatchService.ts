import { IntSalesforceBatchModel, IntSalesforceBatchValidator } from "@nexora/types/domains/int/salesforce/IntSalesforceBatch";

export class IntSalesforceBatchService {
  private repository = new Map<string, IntSalesforceBatchModel>();

  public create(data: Omit<IntSalesforceBatchModel, "id" | "version" | "createdAt" | "updatedAt">): IntSalesforceBatchModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntSalesforceBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntSalesforceBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntSalesforceBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntSalesforceBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntSalesforceBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntSalesforceBatchModel>): IntSalesforceBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntSalesforceBatchModel = {
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
