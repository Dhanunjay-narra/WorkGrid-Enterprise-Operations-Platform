import { FinanceTreasuryScheduleModel, FinanceTreasuryScheduleValidator } from "@nexora/types/domains/finance/treasury/FinanceTreasurySchedule";

export class FinanceTreasuryScheduleService {
  private repository = new Map<string, FinanceTreasuryScheduleModel>();

  public create(data: Omit<FinanceTreasuryScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceTreasuryScheduleModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceTreasuryScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceTreasuryScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceTreasurySchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceTreasuryScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceTreasuryScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceTreasuryScheduleModel>): FinanceTreasuryScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceTreasuryScheduleModel = {
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
