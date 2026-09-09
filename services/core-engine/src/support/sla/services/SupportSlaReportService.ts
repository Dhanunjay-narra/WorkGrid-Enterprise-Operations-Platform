import { SupportSlaReportModel, SupportSlaReportValidator } from "@nexora/types/domains/support/sla/SupportSlaReport";

export class SupportSlaReportService {
  private repository = new Map<string, SupportSlaReportModel>();

  public create(data: Omit<SupportSlaReportModel, "id" | "version" | "createdAt" | "updatedAt">): SupportSlaReportModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportSlaReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportSlaReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportSlaReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportSlaReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportSlaReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportSlaReportModel>): SupportSlaReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportSlaReportModel = {
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
