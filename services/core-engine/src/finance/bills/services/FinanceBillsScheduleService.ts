import { FinanceBillsScheduleModel, FinanceBillsScheduleValidator } from "@nexora/types/domains/finance/bills/FinanceBillsSchedule";

export class FinanceBillsScheduleService {
  private repository = new Map<string, FinanceBillsScheduleModel>();

  public create(data: Omit<FinanceBillsScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceBillsScheduleModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceBillsScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceBillsScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceBillsSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceBillsScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceBillsScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceBillsScheduleModel>): FinanceBillsScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceBillsScheduleModel = {
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
