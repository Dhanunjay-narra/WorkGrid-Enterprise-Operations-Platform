import { CrmPipelineNodeModel, CrmPipelineNodeValidator } from "@nexora/types/domains/crm/pipeline/CrmPipelineNode";

export class CrmPipelineNodeService {
  private repository = new Map<string, CrmPipelineNodeModel>();

  public create(data: Omit<CrmPipelineNodeModel, "id" | "version" | "createdAt" | "updatedAt">): CrmPipelineNodeModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmPipelineNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmPipelineNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmPipelineNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmPipelineNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmPipelineNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmPipelineNodeModel>): CrmPipelineNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmPipelineNodeModel = {
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
