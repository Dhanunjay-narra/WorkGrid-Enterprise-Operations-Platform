import { WorkflowDagPayloadModel, WorkflowDagPayloadValidator } from "@nexora/types/domains/workflow/dag/WorkflowDagPayload";

export class WorkflowDagPayloadService {
  private repository = new Map<string, WorkflowDagPayloadModel>();

  public create(data: Omit<WorkflowDagPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowDagPayloadModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowDagPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowDagPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowDagPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowDagPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowDagPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowDagPayloadModel>): WorkflowDagPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowDagPayloadModel = {
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
