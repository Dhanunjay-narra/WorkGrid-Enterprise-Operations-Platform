import { CrmPipelineItemModel, CrmPipelineItemValidator } from "@nexora/types/domains/crm/pipeline/CrmPipelineItem";

export class CrmPipelineItemService {
  private repository = new Map<string, CrmPipelineItemModel>();

  public create(data: Omit<CrmPipelineItemModel, "id" | "version" | "createdAt" | "updatedAt">): CrmPipelineItemModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmPipelineItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmPipelineItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmPipelineItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmPipelineItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmPipelineItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmPipelineItemModel>): CrmPipelineItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmPipelineItemModel = {
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
