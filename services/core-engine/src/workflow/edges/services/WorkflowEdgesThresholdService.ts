import { WorkflowEdgesThresholdModel, WorkflowEdgesThresholdValidator } from "@nexora/types/domains/workflow/edges/WorkflowEdgesThreshold";

export class WorkflowEdgesThresholdService {
  private repository = new Map<string, WorkflowEdgesThresholdModel>();

  public create(data: Omit<WorkflowEdgesThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowEdgesThresholdModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowEdgesThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowEdgesThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowEdgesThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowEdgesThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowEdgesThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowEdgesThresholdModel>): WorkflowEdgesThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowEdgesThresholdModel = {
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
