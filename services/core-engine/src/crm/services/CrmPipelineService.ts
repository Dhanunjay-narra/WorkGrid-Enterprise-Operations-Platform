import { CrmPipelineData, CrmPipelineValidator } from "../../../../packages/types/src/domains/crm/CrmPipeline";

export class CrmPipelineService {
  private repository = new Map<string, CrmPipelineData>();

  public create(data: Omit<CrmPipelineData, "id" | "createdAt" | "updatedAt">): CrmPipelineData {
    const id = "crm_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: CrmPipelineData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmPipelineValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmPipeline: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmPipelineData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): CrmPipelineData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<CrmPipelineData>): CrmPipelineData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmPipelineData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
