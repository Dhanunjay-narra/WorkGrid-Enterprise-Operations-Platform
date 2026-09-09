import { SupportEscalationReportModel, SupportEscalationReportValidator } from "@nexora/types/domains/support/escalation/SupportEscalationReport";

export class SupportEscalationReportService {
  private repository = new Map<string, SupportEscalationReportModel>();

  public create(data: Omit<SupportEscalationReportModel, "id" | "version" | "createdAt" | "updatedAt">): SupportEscalationReportModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportEscalationReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportEscalationReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportEscalationReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportEscalationReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportEscalationReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportEscalationReportModel>): SupportEscalationReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportEscalationReportModel = {
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
