import { WorkflowNodesEntryModel, WorkflowNodesEntryValidator } from "@nexora/types/domains/workflow/nodes/WorkflowNodesEntry";

export class WorkflowNodesEntryService {
  private repository = new Map<string, WorkflowNodesEntryModel>();

  public create(data: Omit<WorkflowNodesEntryModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowNodesEntryModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowNodesEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowNodesEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowNodesEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowNodesEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowNodesEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowNodesEntryModel>): WorkflowNodesEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowNodesEntryModel = {
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
