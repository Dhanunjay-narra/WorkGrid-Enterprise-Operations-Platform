import { IntSalesforceMappingModel, IntSalesforceMappingValidator } from "@nexora/types/domains/int/salesforce/IntSalesforceMapping";

export class IntSalesforceMappingService {
  private repository = new Map<string, IntSalesforceMappingModel>();

  public create(data: Omit<IntSalesforceMappingModel, "id" | "version" | "createdAt" | "updatedAt">): IntSalesforceMappingModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntSalesforceMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntSalesforceMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntSalesforceMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntSalesforceMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntSalesforceMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntSalesforceMappingModel>): IntSalesforceMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntSalesforceMappingModel = {
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
