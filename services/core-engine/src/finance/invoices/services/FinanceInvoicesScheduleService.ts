import { FinanceInvoicesScheduleModel, FinanceInvoicesScheduleValidator } from "@nexora/types/domains/finance/invoices/FinanceInvoicesSchedule";

export class FinanceInvoicesScheduleService {
  private repository = new Map<string, FinanceInvoicesScheduleModel>();

  public create(data: Omit<FinanceInvoicesScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceInvoicesScheduleModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceInvoicesScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceInvoicesScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceInvoicesSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceInvoicesScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceInvoicesScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceInvoicesScheduleModel>): FinanceInvoicesScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceInvoicesScheduleModel = {
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
