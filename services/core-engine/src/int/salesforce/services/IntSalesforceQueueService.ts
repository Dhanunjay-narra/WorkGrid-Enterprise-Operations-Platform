import { IntSalesforceQueueModel, IntSalesforceQueueValidator } from "@nexora/types/domains/int/salesforce/IntSalesforceQueue";

export class IntSalesforceQueueService {
  private repository = new Map<string, IntSalesforceQueueModel>();

  public create(data: Omit<IntSalesforceQueueModel, "id" | "version" | "createdAt" | "updatedAt">): IntSalesforceQueueModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntSalesforceQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntSalesforceQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntSalesforceQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntSalesforceQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntSalesforceQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntSalesforceQueueModel>): IntSalesforceQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntSalesforceQueueModel = {
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
