import { IntSalesforceScheduleModel, IntSalesforceScheduleValidator } from "@nexora/types/domains/int/salesforce/IntSalesforceSchedule";

export class IntSalesforceScheduleService {
  private repository = new Map<string, IntSalesforceScheduleModel>();

  public create(data: Omit<IntSalesforceScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): IntSalesforceScheduleModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntSalesforceScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntSalesforceScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntSalesforceSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntSalesforceScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntSalesforceScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntSalesforceScheduleModel>): IntSalesforceScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntSalesforceScheduleModel = {
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
