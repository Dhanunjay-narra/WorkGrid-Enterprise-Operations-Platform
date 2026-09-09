import { WorkflowNodesTransactionModel, WorkflowNodesTransactionValidator } from "@nexora/types/domains/workflow/nodes/WorkflowNodesTransaction";

export class WorkflowNodesTransactionService {
  private repository = new Map<string, WorkflowNodesTransactionModel>();

  public create(data: Omit<WorkflowNodesTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowNodesTransactionModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowNodesTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowNodesTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowNodesTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowNodesTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowNodesTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowNodesTransactionModel>): WorkflowNodesTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowNodesTransactionModel = {
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
