import { IntSalesforceRecordModel, IntSalesforceRecordValidator } from "@nexora/types/domains/int/salesforce/IntSalesforceRecord";

export class IntSalesforceRecordService {
  private repository = new Map<string, IntSalesforceRecordModel>();

  public create(data: Omit<IntSalesforceRecordModel, "id" | "version" | "createdAt" | "updatedAt">): IntSalesforceRecordModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntSalesforceRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntSalesforceRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntSalesforceRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntSalesforceRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntSalesforceRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntSalesforceRecordModel>): IntSalesforceRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntSalesforceRecordModel = {
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
