import { CrmPipelineSummaryModel, CrmPipelineSummaryValidator } from "@nexora/types/domains/crm/pipeline/CrmPipelineSummary";

export class CrmPipelineSummaryService {
  private repository = new Map<string, CrmPipelineSummaryModel>();

  public create(data: Omit<CrmPipelineSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): CrmPipelineSummaryModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmPipelineSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmPipelineSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmPipelineSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmPipelineSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmPipelineSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmPipelineSummaryModel>): CrmPipelineSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmPipelineSummaryModel = {
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
