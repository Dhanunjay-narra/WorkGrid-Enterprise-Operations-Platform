import { IntSalesforcePayloadModel, IntSalesforcePayloadValidator } from "@nexora/types/domains/int/salesforce/IntSalesforcePayload";

export class IntSalesforcePayloadService {
  private repository = new Map<string, IntSalesforcePayloadModel>();

  public create(data: Omit<IntSalesforcePayloadModel, "id" | "version" | "createdAt" | "updatedAt">): IntSalesforcePayloadModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntSalesforcePayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntSalesforcePayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntSalesforcePayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntSalesforcePayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntSalesforcePayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntSalesforcePayloadModel>): IntSalesforcePayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntSalesforcePayloadModel = {
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
