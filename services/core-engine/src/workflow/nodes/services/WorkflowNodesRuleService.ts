import { WorkflowNodesRuleModel, WorkflowNodesRuleValidator } from "@nexora/types/domains/workflow/nodes/WorkflowNodesRule";

export class WorkflowNodesRuleService {
  private repository = new Map<string, WorkflowNodesRuleModel>();

  public create(data: Omit<WorkflowNodesRuleModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowNodesRuleModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowNodesRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowNodesRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowNodesRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowNodesRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowNodesRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowNodesRuleModel>): WorkflowNodesRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowNodesRuleModel = {
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
