import { FinanceBillsEventModel, FinanceBillsEventValidator } from "@nexora/types/domains/finance/bills/FinanceBillsEvent";

export class FinanceBillsEventService {
  private repository = new Map<string, FinanceBillsEventModel>();

  public create(data: Omit<FinanceBillsEventModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceBillsEventModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceBillsEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceBillsEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceBillsEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceBillsEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceBillsEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceBillsEventModel>): FinanceBillsEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceBillsEventModel = {
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
