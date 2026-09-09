import { WorkflowNodesPayloadModel, WorkflowNodesPayloadValidator } from "@nexora/types/domains/workflow/nodes/WorkflowNodesPayload";

export class WorkflowNodesPayloadService {
  private repository = new Map<string, WorkflowNodesPayloadModel>();

  public create(data: Omit<WorkflowNodesPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowNodesPayloadModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowNodesPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowNodesPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowNodesPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowNodesPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowNodesPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowNodesPayloadModel>): WorkflowNodesPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowNodesPayloadModel = {
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
