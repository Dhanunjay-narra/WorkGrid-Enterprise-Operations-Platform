import { IntSalesforceTaskModel, IntSalesforceTaskValidator } from "@nexora/types/domains/int/salesforce/IntSalesforceTask";

export class IntSalesforceTaskService {
  private repository = new Map<string, IntSalesforceTaskModel>();

  public create(data: Omit<IntSalesforceTaskModel, "id" | "version" | "createdAt" | "updatedAt">): IntSalesforceTaskModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntSalesforceTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntSalesforceTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntSalesforceTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntSalesforceTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntSalesforceTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntSalesforceTaskModel>): IntSalesforceTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntSalesforceTaskModel = {
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
