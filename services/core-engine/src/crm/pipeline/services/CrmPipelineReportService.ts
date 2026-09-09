import { CrmPipelineReportModel, CrmPipelineReportValidator } from "@nexora/types/domains/crm/pipeline/CrmPipelineReport";

export class CrmPipelineReportService {
  private repository = new Map<string, CrmPipelineReportModel>();

  public create(data: Omit<CrmPipelineReportModel, "id" | "version" | "createdAt" | "updatedAt">): CrmPipelineReportModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmPipelineReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmPipelineReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmPipelineReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmPipelineReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmPipelineReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmPipelineReportModel>): CrmPipelineReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmPipelineReportModel = {
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
