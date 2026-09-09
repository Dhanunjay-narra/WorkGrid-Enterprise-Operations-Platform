import { CrmPipelineProfileModel, CrmPipelineProfileValidator } from "@nexora/types/domains/crm/pipeline/CrmPipelineProfile";

export class CrmPipelineProfileService {
  private repository = new Map<string, CrmPipelineProfileModel>();

  public create(data: Omit<CrmPipelineProfileModel, "id" | "version" | "createdAt" | "updatedAt">): CrmPipelineProfileModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmPipelineProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmPipelineProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmPipelineProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmPipelineProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmPipelineProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmPipelineProfileModel>): CrmPipelineProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmPipelineProfileModel = {
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
