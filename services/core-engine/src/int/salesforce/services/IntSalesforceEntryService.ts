import { IntSalesforceEntryModel, IntSalesforceEntryValidator } from "@nexora/types/domains/int/salesforce/IntSalesforceEntry";

export class IntSalesforceEntryService {
  private repository = new Map<string, IntSalesforceEntryModel>();

  public create(data: Omit<IntSalesforceEntryModel, "id" | "version" | "createdAt" | "updatedAt">): IntSalesforceEntryModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntSalesforceEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntSalesforceEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntSalesforceEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntSalesforceEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntSalesforceEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntSalesforceEntryModel>): IntSalesforceEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntSalesforceEntryModel = {
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
