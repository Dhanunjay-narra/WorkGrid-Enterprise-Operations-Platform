import { BiAnomaliesReportModel, BiAnomaliesReportValidator } from "@nexora/types/domains/bi/anomalies/BiAnomaliesReport";

export class BiAnomaliesReportService {
  private repository = new Map<string, BiAnomaliesReportModel>();

  public create(data: Omit<BiAnomaliesReportModel, "id" | "version" | "createdAt" | "updatedAt">): BiAnomaliesReportModel {
    const id = "bi_a_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiAnomaliesReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiAnomaliesReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiAnomaliesReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiAnomaliesReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiAnomaliesReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiAnomaliesReportModel>): BiAnomaliesReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiAnomaliesReportModel = {
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
