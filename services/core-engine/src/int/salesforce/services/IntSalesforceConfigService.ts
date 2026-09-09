import { IntSalesforceConfigModel, IntSalesforceConfigValidator } from "@nexora/types/domains/int/salesforce/IntSalesforceConfig";

export class IntSalesforceConfigService {
  private repository = new Map<string, IntSalesforceConfigModel>();

  public create(data: Omit<IntSalesforceConfigModel, "id" | "version" | "createdAt" | "updatedAt">): IntSalesforceConfigModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntSalesforceConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntSalesforceConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntSalesforceConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntSalesforceConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntSalesforceConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntSalesforceConfigModel>): IntSalesforceConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntSalesforceConfigModel = {
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
