import { WorkflowVariablesRuleModel, WorkflowVariablesRuleValidator } from "@nexora/types/domains/workflow/variables/WorkflowVariablesRule";

export class WorkflowVariablesRuleService {
  private repository = new Map<string, WorkflowVariablesRuleModel>();

  public create(data: Omit<WorkflowVariablesRuleModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowVariablesRuleModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowVariablesRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowVariablesRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowVariablesRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowVariablesRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowVariablesRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowVariablesRuleModel>): WorkflowVariablesRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowVariablesRuleModel = {
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
