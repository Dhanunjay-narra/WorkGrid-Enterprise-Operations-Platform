import { DmsChunksReportModel, DmsChunksReportValidator } from "@nexora/types/domains/dms/chunks/DmsChunksReport";

export class DmsChunksReportService {
  private repository = new Map<string, DmsChunksReportModel>();

  public create(data: Omit<DmsChunksReportModel, "id" | "version" | "createdAt" | "updatedAt">): DmsChunksReportModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsChunksReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsChunksReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsChunksReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsChunksReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsChunksReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsChunksReportModel>): DmsChunksReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsChunksReportModel = {
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
