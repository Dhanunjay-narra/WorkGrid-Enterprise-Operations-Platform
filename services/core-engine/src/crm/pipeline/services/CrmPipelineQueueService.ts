import { CrmPipelineQueueModel, CrmPipelineQueueValidator } from "@nexora/types/domains/crm/pipeline/CrmPipelineQueue";

export class CrmPipelineQueueService {
  private repository = new Map<string, CrmPipelineQueueModel>();

  public create(data: Omit<CrmPipelineQueueModel, "id" | "version" | "createdAt" | "updatedAt">): CrmPipelineQueueModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmPipelineQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmPipelineQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmPipelineQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmPipelineQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmPipelineQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmPipelineQueueModel>): CrmPipelineQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmPipelineQueueModel = {
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
