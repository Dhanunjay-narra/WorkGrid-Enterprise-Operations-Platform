import { CrmPipelineTaskModel, CrmPipelineTaskValidator } from "@nexora/types/domains/crm/pipeline/CrmPipelineTask";

export class CrmPipelineTaskService {
  private repository = new Map<string, CrmPipelineTaskModel>();

  public create(data: Omit<CrmPipelineTaskModel, "id" | "version" | "createdAt" | "updatedAt">): CrmPipelineTaskModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmPipelineTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmPipelineTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmPipelineTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmPipelineTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmPipelineTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmPipelineTaskModel>): CrmPipelineTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmPipelineTaskModel = {
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
