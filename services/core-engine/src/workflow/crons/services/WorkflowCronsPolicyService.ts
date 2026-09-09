import { WorkflowCronsPolicyModel, WorkflowCronsPolicyValidator } from "@nexora/types/domains/workflow/crons/WorkflowCronsPolicy";

export class WorkflowCronsPolicyService {
  private repository = new Map<string, WorkflowCronsPolicyModel>();

  public create(data: Omit<WorkflowCronsPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowCronsPolicyModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowCronsPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowCronsPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowCronsPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowCronsPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowCronsPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowCronsPolicyModel>): WorkflowCronsPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowCronsPolicyModel = {
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
