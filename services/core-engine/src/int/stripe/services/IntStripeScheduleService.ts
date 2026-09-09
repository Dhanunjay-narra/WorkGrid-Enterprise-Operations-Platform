import { IntStripeScheduleModel, IntStripeScheduleValidator } from "@nexora/types/domains/int/stripe/IntStripeSchedule";

export class IntStripeScheduleService {
  private repository = new Map<string, IntStripeScheduleModel>();

  public create(data: Omit<IntStripeScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): IntStripeScheduleModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntStripeScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntStripeScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntStripeSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntStripeScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntStripeScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntStripeScheduleModel>): IntStripeScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntStripeScheduleModel = {
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
