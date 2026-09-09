import { SecComplianceReportData, SecComplianceReportValidator } from "../../../../packages/types/src/domains/security/SecComplianceReport";

export class SecComplianceReportService {
  private repository = new Map<string, SecComplianceReportData>();

  public create(data: Omit<SecComplianceReportData, "id" | "createdAt" | "updatedAt">): SecComplianceReportData {
    const id = "sec_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: SecComplianceReportData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = SecComplianceReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SecComplianceReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SecComplianceReportData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): SecComplianceReportData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<SecComplianceReportData>): SecComplianceReportData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SecComplianceReportData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
