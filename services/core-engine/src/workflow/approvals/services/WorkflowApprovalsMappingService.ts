import { WorkflowApprovalsMappingModel, WorkflowApprovalsMappingValidator } from "@nexora/types/domains/workflow/approvals/WorkflowApprovalsMapping";

export class WorkflowApprovalsMappingService {
  private repository = new Map<string, WorkflowApprovalsMappingModel>();

  public create(data: Omit<WorkflowApprovalsMappingModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowApprovalsMappingModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowApprovalsMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowApprovalsMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowApprovalsMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowApprovalsMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowApprovalsMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowApprovalsMappingModel>): WorkflowApprovalsMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowApprovalsMappingModel = {
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
