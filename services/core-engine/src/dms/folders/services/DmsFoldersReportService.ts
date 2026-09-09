import { DmsFoldersReportModel, DmsFoldersReportValidator } from "@nexora/types/domains/dms/folders/DmsFoldersReport";

export class DmsFoldersReportService {
  private repository = new Map<string, DmsFoldersReportModel>();

  public create(data: Omit<DmsFoldersReportModel, "id" | "version" | "createdAt" | "updatedAt">): DmsFoldersReportModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsFoldersReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsFoldersReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsFoldersReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsFoldersReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsFoldersReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsFoldersReportModel>): DmsFoldersReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsFoldersReportModel = {
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
