import { BiExecutiveSummaryData, BiExecutiveSummaryValidator } from "../../../../packages/types/src/domains/analytics/BiExecutiveSummary";

export class BiExecutiveSummaryService {
  private repository = new Map<string, BiExecutiveSummaryData>();

  public create(data: Omit<BiExecutiveSummaryData, "id" | "createdAt" | "updatedAt">): BiExecutiveSummaryData {
    const id = "ana_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: BiExecutiveSummaryData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiExecutiveSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiExecutiveSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiExecutiveSummaryData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): BiExecutiveSummaryData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<BiExecutiveSummaryData>): BiExecutiveSummaryData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiExecutiveSummaryData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
