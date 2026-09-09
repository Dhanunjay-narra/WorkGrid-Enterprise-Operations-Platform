import { CrmPipelineAssignmentModel, CrmPipelineAssignmentValidator } from "@nexora/types/domains/crm/pipeline/CrmPipelineAssignment";

export class CrmPipelineAssignmentService {
  private repository = new Map<string, CrmPipelineAssignmentModel>();

  public create(data: Omit<CrmPipelineAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): CrmPipelineAssignmentModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmPipelineAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmPipelineAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmPipelineAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmPipelineAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmPipelineAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmPipelineAssignmentModel>): CrmPipelineAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmPipelineAssignmentModel = {
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
