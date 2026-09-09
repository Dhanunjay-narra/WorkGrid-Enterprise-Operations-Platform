import { WorkflowApprovalsItemModel, WorkflowApprovalsItemValidator } from "@nexora/types/domains/workflow/approvals/WorkflowApprovalsItem";

export class WorkflowApprovalsItemService {
  private repository = new Map<string, WorkflowApprovalsItemModel>();

  public create(data: Omit<WorkflowApprovalsItemModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowApprovalsItemModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowApprovalsItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowApprovalsItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowApprovalsItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowApprovalsItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowApprovalsItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowApprovalsItemModel>): WorkflowApprovalsItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowApprovalsItemModel = {
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
