import { FinFiscalYearData, FinFiscalYearValidator } from "../../../../packages/types/src/domains/finance/FinFiscalYear";

export class FinFiscalYearService {
  private repository = new Map<string, FinFiscalYearData>();

  public create(data: Omit<FinFiscalYearData, "id" | "createdAt" | "updatedAt">): FinFiscalYearData {
    const id = "fin_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: FinFiscalYearData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinFiscalYearValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinFiscalYear: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinFiscalYearData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): FinFiscalYearData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<FinFiscalYearData>): FinFiscalYearData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinFiscalYearData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
