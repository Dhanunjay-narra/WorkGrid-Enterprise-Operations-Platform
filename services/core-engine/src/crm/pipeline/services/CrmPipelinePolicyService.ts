import { CrmPipelinePolicyModel, CrmPipelinePolicyValidator } from "@nexora/types/domains/crm/pipeline/CrmPipelinePolicy";

export class CrmPipelinePolicyService {
  private repository = new Map<string, CrmPipelinePolicyModel>();

  public create(data: Omit<CrmPipelinePolicyModel, "id" | "version" | "createdAt" | "updatedAt">): CrmPipelinePolicyModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmPipelinePolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmPipelinePolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmPipelinePolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmPipelinePolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmPipelinePolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmPipelinePolicyModel>): CrmPipelinePolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmPipelinePolicyModel = {
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
