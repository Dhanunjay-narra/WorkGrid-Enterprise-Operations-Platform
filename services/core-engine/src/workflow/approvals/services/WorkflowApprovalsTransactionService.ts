import { WorkflowApprovalsTransactionModel, WorkflowApprovalsTransactionValidator } from "@nexora/types/domains/workflow/approvals/WorkflowApprovalsTransaction";

export class WorkflowApprovalsTransactionService {
  private repository = new Map<string, WorkflowApprovalsTransactionModel>();

  public create(data: Omit<WorkflowApprovalsTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowApprovalsTransactionModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowApprovalsTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowApprovalsTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowApprovalsTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowApprovalsTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowApprovalsTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowApprovalsTransactionModel>): WorkflowApprovalsTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowApprovalsTransactionModel = {
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
