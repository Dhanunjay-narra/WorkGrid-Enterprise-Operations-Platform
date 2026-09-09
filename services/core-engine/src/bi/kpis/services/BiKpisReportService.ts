import { BiKpisReportModel, BiKpisReportValidator } from "@nexora/types/domains/bi/kpis/BiKpisReport";

export class BiKpisReportService {
  private repository = new Map<string, BiKpisReportModel>();

  public create(data: Omit<BiKpisReportModel, "id" | "version" | "createdAt" | "updatedAt">): BiKpisReportModel {
    const id = "bi_k_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiKpisReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiKpisReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiKpisReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiKpisReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiKpisReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiKpisReportModel>): BiKpisReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiKpisReportModel = {
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
