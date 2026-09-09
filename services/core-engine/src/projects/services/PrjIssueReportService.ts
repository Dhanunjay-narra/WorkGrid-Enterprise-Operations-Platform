import { PrjIssueReportData, PrjIssueReportValidator } from "../../../../packages/types/src/domains/projects/PrjIssueReport";

export class PrjIssueReportService {
  private repository = new Map<string, PrjIssueReportData>();

  public create(data: Omit<PrjIssueReportData, "id" | "createdAt" | "updatedAt">): PrjIssueReportData {
    const id = "pro_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: PrjIssueReportData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = PrjIssueReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for PrjIssueReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): PrjIssueReportData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): PrjIssueReportData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<PrjIssueReportData>): PrjIssueReportData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: PrjIssueReportData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
