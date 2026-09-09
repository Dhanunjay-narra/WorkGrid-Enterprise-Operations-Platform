import { DmsOcrReportModel, DmsOcrReportValidator } from "@nexora/types/domains/dms/ocr/DmsOcrReport";

export class DmsOcrReportService {
  private repository = new Map<string, DmsOcrReportModel>();

  public create(data: Omit<DmsOcrReportModel, "id" | "version" | "createdAt" | "updatedAt">): DmsOcrReportModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsOcrReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsOcrReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsOcrReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsOcrReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsOcrReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsOcrReportModel>): DmsOcrReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsOcrReportModel = {
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
