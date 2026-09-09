import { CrmPipelineBatchModel, CrmPipelineBatchValidator } from "@nexora/types/domains/crm/pipeline/CrmPipelineBatch";

export class CrmPipelineBatchService {
  private repository = new Map<string, CrmPipelineBatchModel>();

  public create(data: Omit<CrmPipelineBatchModel, "id" | "version" | "createdAt" | "updatedAt">): CrmPipelineBatchModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmPipelineBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmPipelineBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmPipelineBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmPipelineBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmPipelineBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmPipelineBatchModel>): CrmPipelineBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmPipelineBatchModel = {
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
