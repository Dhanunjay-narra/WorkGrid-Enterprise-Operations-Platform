import { WorkflowCronsRuleModel, WorkflowCronsRuleValidator } from "@nexora/types/domains/workflow/crons/WorkflowCronsRule";

export class WorkflowCronsRuleService {
  private repository = new Map<string, WorkflowCronsRuleModel>();

  public create(data: Omit<WorkflowCronsRuleModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowCronsRuleModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowCronsRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowCronsRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowCronsRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowCronsRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowCronsRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowCronsRuleModel>): WorkflowCronsRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowCronsRuleModel = {
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
