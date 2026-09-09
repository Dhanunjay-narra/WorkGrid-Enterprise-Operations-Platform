import { AuditReportModel, AuditReportValidator } from "@nexora/types/domains/audit/AuditReport";

export class AuditReportService {
  private repository = new Map<string, AuditReportModel>();

  public create(data: Omit<AuditReportModel, "id" | "version" | "createdAt" | "updatedAt">): AuditReportModel {
    const id = "audi_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AuditReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AuditReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AuditReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AuditReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AuditReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AuditReportModel>): AuditReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AuditReportModel = {
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
