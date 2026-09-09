import { WorkflowApprovalsPayloadModel, WorkflowApprovalsPayloadValidator } from "@nexora/types/domains/workflow/approvals/WorkflowApprovalsPayload";

export class WorkflowApprovalsPayloadService {
  private repository = new Map<string, WorkflowApprovalsPayloadModel>();

  public create(data: Omit<WorkflowApprovalsPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowApprovalsPayloadModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowApprovalsPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowApprovalsPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowApprovalsPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowApprovalsPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowApprovalsPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowApprovalsPayloadModel>): WorkflowApprovalsPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowApprovalsPayloadModel = {
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
