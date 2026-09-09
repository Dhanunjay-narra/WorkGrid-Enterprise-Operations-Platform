import { IntSalesforceThresholdModel, IntSalesforceThresholdValidator } from "@nexora/types/domains/int/salesforce/IntSalesforceThreshold";

export class IntSalesforceThresholdService {
  private repository = new Map<string, IntSalesforceThresholdModel>();

  public create(data: Omit<IntSalesforceThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): IntSalesforceThresholdModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntSalesforceThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntSalesforceThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntSalesforceThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntSalesforceThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntSalesforceThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntSalesforceThresholdModel>): IntSalesforceThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntSalesforceThresholdModel = {
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
