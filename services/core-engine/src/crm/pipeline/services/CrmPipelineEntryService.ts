import { CrmPipelineEntryModel, CrmPipelineEntryValidator } from "@nexora/types/domains/crm/pipeline/CrmPipelineEntry";

export class CrmPipelineEntryService {
  private repository = new Map<string, CrmPipelineEntryModel>();

  public create(data: Omit<CrmPipelineEntryModel, "id" | "version" | "createdAt" | "updatedAt">): CrmPipelineEntryModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmPipelineEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmPipelineEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmPipelineEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmPipelineEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmPipelineEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmPipelineEntryModel>): CrmPipelineEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmPipelineEntryModel = {
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
