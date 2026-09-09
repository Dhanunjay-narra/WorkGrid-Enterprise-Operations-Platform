import { IntSalesforceStateModel, IntSalesforceStateValidator } from "@nexora/types/domains/int/salesforce/IntSalesforceState";

export class IntSalesforceStateService {
  private repository = new Map<string, IntSalesforceStateModel>();

  public create(data: Omit<IntSalesforceStateModel, "id" | "version" | "createdAt" | "updatedAt">): IntSalesforceStateModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntSalesforceStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntSalesforceStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntSalesforceState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntSalesforceStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntSalesforceStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntSalesforceStateModel>): IntSalesforceStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntSalesforceStateModel = {
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
