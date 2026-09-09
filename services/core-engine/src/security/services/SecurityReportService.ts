import { SecurityReportModel, SecurityReportValidator } from "@nexora/types/domains/security/SecurityReport";

export class SecurityReportService {
  private repository = new Map<string, SecurityReportModel>();

  public create(data: Omit<SecurityReportModel, "id" | "version" | "createdAt" | "updatedAt">): SecurityReportModel {
    const id = "secu_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SecurityReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SecurityReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SecurityReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SecurityReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SecurityReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SecurityReportModel>): SecurityReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SecurityReportModel = {
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
