import { SupSatisfactionReportData, SupSatisfactionReportValidator } from "../../../../packages/types/src/domains/support/SupSatisfactionReport";

export class SupSatisfactionReportService {
  private repository = new Map<string, SupSatisfactionReportData>();

  public create(data: Omit<SupSatisfactionReportData, "id" | "createdAt" | "updatedAt">): SupSatisfactionReportData {
    const id = "sup_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: SupSatisfactionReportData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupSatisfactionReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupSatisfactionReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupSatisfactionReportData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): SupSatisfactionReportData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<SupSatisfactionReportData>): SupSatisfactionReportData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupSatisfactionReportData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
