import { CrmPipelineRecordModel, CrmPipelineRecordValidator } from "@nexora/types/domains/crm/pipeline/CrmPipelineRecord";

export class CrmPipelineRecordService {
  private repository = new Map<string, CrmPipelineRecordModel>();

  public create(data: Omit<CrmPipelineRecordModel, "id" | "version" | "createdAt" | "updatedAt">): CrmPipelineRecordModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmPipelineRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmPipelineRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmPipelineRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmPipelineRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmPipelineRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmPipelineRecordModel>): CrmPipelineRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmPipelineRecordModel = {
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
