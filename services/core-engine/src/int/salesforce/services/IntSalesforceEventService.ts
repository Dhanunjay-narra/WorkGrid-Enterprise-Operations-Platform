import { IntSalesforceEventModel, IntSalesforceEventValidator } from "@nexora/types/domains/int/salesforce/IntSalesforceEvent";

export class IntSalesforceEventService {
  private repository = new Map<string, IntSalesforceEventModel>();

  public create(data: Omit<IntSalesforceEventModel, "id" | "version" | "createdAt" | "updatedAt">): IntSalesforceEventModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntSalesforceEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntSalesforceEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntSalesforceEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntSalesforceEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntSalesforceEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntSalesforceEventModel>): IntSalesforceEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntSalesforceEventModel = {
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
